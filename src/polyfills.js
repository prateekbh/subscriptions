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
 * @fileoverview Loads all polyfills needed by the __PROJECT__.
 * This list should not get longer without a very good reason.
 */
import {
  install as installDOMTokenListToggle,
} from './polyfills/domtokenlist-toggle';
import {install as installDocContains} from './polyfills/document-contains';
import {install as installMathSign} from './polyfills/math-sign';
import {install as installObjectAssign} from './polyfills/object-assign';
import {install as installPromise} from './polyfills/promise';
import {install as installArrayIncludes} from './polyfills/array-includes';


installDOMTokenListToggle(self);
installMathSign(self);
installObjectAssign(self);
installPromise(self);
installDocContains(self);
installArrayIncludes(self);
