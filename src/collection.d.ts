/*!
* Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
* The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
*
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*
* See the License for the specific language governing permissions and limitations under the License.
*/

import { Client } from './client';
/**
 * Provides an interface to iterate over all objects in a collection that has pagination via Link headers
 */
export class Collection {
  nextUri: string;
  factory: any;
  client: Client;
  currentItems: any[];
  /**
   * Creates an instance of Collection.
   * @param {ApiClient} client A reference to the top-level api client
   * @param {String} uri E.g. /api/v1/resources
   * @param {Object} Ctor Class of each item in the collection
   */
  constructor(client: Client, uri: string, factory: any);
  next(): Promise<{ value: any, done: boolean }>;
  getNextPage(): Promise<any>;

  /**
   * @param {Function} iterator Function to call with each resource instance
   *
   * @memberOf Collection
   */
  each(iterator: (...prams: any[]) => any): Promise<any>;
}
