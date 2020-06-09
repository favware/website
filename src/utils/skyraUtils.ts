/**
 * Copyright 2019-2020 Antonio Román
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Router from 'next/router';

/**
 * No operation function
 */
export function noOp() {
  return undefined;
}

export function navigate(path: string) {
  if (path.startsWith('http') || path.startsWith('//') || path.startsWith('mailto:')) {
    return () => window.open(path, '_blank', 'noopener=yes,noreferrer=yes');
  }
  return () => Router.push(path);
}
