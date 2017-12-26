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
 * @class AppLink
 * @extends Resource
 * @property { string } appAssignmentId
 * @property { string } appInstanceId
 * @property { string } appName
 * @property { boolean } credentialsSetup
 * @property { boolean } hidden
 * @property { string } id
 * @property { string } label
 * @property { string } linkUrl
 * @property { string } logoUrl
 * @property { integer } sortOrder
 */
export class AppLink extends Resource {
  appAssignmentId: string;
  appInstanceId: string;
  appName: string;
  credentialsSetup: boolean;
  hidden: boolean;
  id: string;
  label: string;
  linkUrl: string;
  logoUrl: string;
  sortOrder: number;
  constructor(resourceJson: any, client: Client);

}


