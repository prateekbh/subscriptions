/**
 * Copyright 2017 The __PROJECT__ Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param  {...*} var_args [description]
 */
 export function log(var_args) {
   console.log.apply(console, arguments);
 }

/**
 * Throws an error if the first argument isn't trueish.
 *
 * Supports argument substitution into the message via %s placeholders.
 *
 * Throws an error object that has two extra properties:
 * - associatedElement: This is the first element provided in the var args.
 *   It can be used for improved display of error messages.
 * - messageArray: The elements of the substituted message as non-stringified
 *   elements in an array. When e.g. passed to console.error this yields
 *   native displays of things like HTML elements.
 *
 * @param {T} shouldBeTrueish The value to assert. The assert fails if it does
 *     not evaluate to true.
 * @param {string=} opt_message The assertion message
 * @param {...*} var_args Arguments substituted into %s in the message.
 * @return {T} The value of shouldBeTrueish.
 * @template T
 */
 export function assert(shouldBeTrueish, opt_message, var_args) {
   let firstElement;
   if (!shouldBeTrueish) {
     const message = opt_message || 'Assertion failed';
     const splitMessage = message.split('%s');
     const first = splitMessage.shift();
     let formatted = first;
     const messageArray = [];
     pushIfNonEmpty(messageArray, first);
     for (let i = 2; i < arguments.length; i++) {
       const val = arguments[i];
       if (val && val.tagName) {
         firstElement = val;
       }
       const nextConstant = splitMessage.shift();
       messageArray.push(val);
       pushIfNonEmpty(messageArray, nextConstant.trim());
       formatted += toString(val) + nextConstant;
     }
     const e = new Error(formatted);
     e.fromAssert = true;
     e.associatedElement = firstElement;
     e.messageArray = messageArray;
     throw e;
   }
   return shouldBeTrueish;
 }

/**
 * @param {!Array} array
 * @param {*} val
 */
 function pushIfNonEmpty(array, val) {
   if (val != '') {
     array.push(val);
   }
 }

 function toString(val) {
  // Do check equivalent to `val instanceof Element` without cross-window bug
   if (val && val.nodeType == 1) {
     return val.tagName.toLowerCase() + (val.id ? '#' + val.id : '');
   }
   return /** @type {string} */ (val);
 }
