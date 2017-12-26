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
import { AppUserCredentials } from './AppUserCredentials';
import { UserProfile } from './UserProfile';


/**
 * @class AppUser
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } created
 * @property { AppUserCredentials } credentials
 * @property { string } externalId
 * @property { string } id
 * @property { dateTime } lastSync
 * @property { dateTime } lastUpdated
 * @property { dateTime } passwordChanged
 * @property { hash } profile
 * @property { string } scope
 * @property { string } status
 * @property { dateTime } statusChanged
 * @property { string } syncState
 */
export class AppUser extends Resource {
  _embedded: any;
  _links: any;
  created: Date;
  credentials: AppUserCredentials;
  externalId: string;
  id: string;
  lastSync: Date;
  lastUpdated: Date;
  passwordChanged: Date;
  profile: UserProfile;
  scope: string;
  status: string;
  statusChanged: Date;
  syncState: string;
  constructor(resourceJson: any, client: Client);

  update(appId: string): Promise<AppUser>;
  delete(appId: string): Promise<AppUser>;
}


