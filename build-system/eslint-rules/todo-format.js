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
'use strict';

module.exports = function(context) {
  return {
    Program: function(node) {
      if (node.comments) {
        node.comments.forEach(function(comment) {
          if (/TODO/.test(comment.value) &&
                !/TODO\(@?\w+,\s*#\d{1,}\)/.test(comment.value) &&
                !/TODO\(@?\w+,\s*\d{4}-\d{2}-\d{2}\)/.test(comment.value)) {
            context.report(comment,
                'TODOs must be in TODO(@username, #1234) or TODO(@username, MM/DD/YYYY) format. Found: "' +
                comment.value.trim() + '"');
          }
        });
      }
    }
  };
};
