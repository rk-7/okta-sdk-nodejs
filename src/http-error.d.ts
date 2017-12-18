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

/**
 * Coerce a generic HTTP error into an Error object that is easy to grok.
 */
export class HttpError extends Error {
  url: string;
  status: number | string;
  responseBody: string;
  /**
   * @param {String} url The API url that was requested when the error occurred
   * @param {Number|String} status The HTTP status code of the response
   * @param {String} responseBody The text of the response body
   */
  constructor(url: string, status: number | string, responseBody: string);
}
