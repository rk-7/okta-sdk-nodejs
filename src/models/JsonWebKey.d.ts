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


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

import { Resource } from '../resource';
import { Client } from "../client";


/**
 * @class JsonWebKey
 * @extends Resource
 * @property { string } alg
 * @property { dateTime } created
 * @property { string } e
 * @property { dateTime } expiresAt
 * @property { array } key_ops
 * @property { string } kid
 * @property { string } kty
 * @property { dateTime } lastUpdated
 * @property { string } n
 * @property { string } status
 * @property { string } use
 * @property { array } x5c
 * @property { string } x5t
 * @property { string } x5t#S256
 * @property { string } x5u
 */
export class JsonWebKey extends Resource {
  alg: string;
  created: Date;
  e: string;
  expiresAt: Date;
  key_ops: Array<string>;
  kid: string;
  kty: string;
  lastUpdated: Date;
  n: string;
  status: string;
  use: string;
  x5c: Array<string>;
  x5t: string;
  x5u: string;
  constructor(resourceJson: any, client: Client);

}


