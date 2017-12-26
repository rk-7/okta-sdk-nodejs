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
import { SessionIdentityProvider } from "./SessionIdentityProvider";
import { SessionStatus } from "./SessionStatus";


/**
 * @class Session
 * @extends Resource
 * @property { hash } _links
 * @property { array } amr
 * @property { dateTime } createdAt
 * @property { dateTime } expiresAt
 * @property { string } id
 * @property { SessionIdentityProvider } idp
 * @property { dateTime } lastFactorVerification
 * @property { dateTime } lastPasswordVerification
 * @property { string } login
 * @property { SessionStatus } status
 * @property { string } userId
 */
export class Session extends Resource {
  _links: string;
  amr: Array<any>;
  createdAt: Date;
  expiresAt: Date;
  id: string;
  idp: SessionIdentityProvider;
  lastFactorVerification: Date;
  lastPasswordVerification: Date;
  login: string;
  status: SessionStatus;
  userId: string;
  constructor(resourceJson: any, client: Client);

  delete(): Request;
  refresh(): Promise<Session>;
}


