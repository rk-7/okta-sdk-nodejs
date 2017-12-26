import { Collection } from './../collection';
import { Client } from './../client';
import { Resource } from "../resource";
import { ModelResolutionFactory } from "../resolution-factory";
import { AppUser, ApplicationGroupAssignment, ApplicationAccessibility, ApplicationCredentials, ApplicationLicensing, ApplicationSettings, ApplicationSignOnMode, ApplicationVisibility } from "./";
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


/**
 * @class Application
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { ApplicationAccessibility } accessibility
 * @property { dateTime } created
 * @property { ApplicationCredentials } credentials
 * @property { array } features
 * @property { string } id
 * @property { string } label
 * @property { dateTime } lastUpdated
 * @property { ApplicationLicensing } licensing
 * @property { string } name
 * @property { ApplicationSettings } settings
 * @property { ApplicationSignOnMode } signOnMode
 * @property { string } status
 * @property { ApplicationVisibility } visibility
 */
export class Application extends Resource {
  _embedded: { [key: string]: any };
  _links: { [key: string]: any };
  accessibility: ApplicationAccessibility;
  created: Date;
  credentials: ApplicationCredentials;
  features: Array<string>;
  id: string;
  label: string;
  lastUpdated: Date;
  licensing: ApplicationLicensing;
  name: string;
  settings: ApplicationSettings;
  signOnMode: ApplicationSignOnMode;
  status: string;
  visibility: ApplicationVisibility;
  constructor(resourceJson: any, client: Client);

  update(): Promise<Resource | ModelResolutionFactory>;
  delete(): Request
  activate(): Request
  deactivate(): Request
  listApplicationUsers(queryParameters?: any): Collection
  assignUserToApplication(appUser: AppUser): Promise<AppUser>;
  getApplicationUser(userId: string, queryParameters: any): Promise<AppUser>;
  createApplicationGroupAssignment(groupId: string, applicationGroupAssignment: ApplicationGroupAssignment): Promise<ApplicationGroupAssignment>;
  getApplicationGroupAssignment(groupId: string, queryParameters: any): Promise<ApplicationGroupAssignment>;
  generateApplicationKey(queryParameters: any): Promise<JsonWebKey>;
  cloneApplicationKey(keyId: string, queryParameters: any): Promise<JsonWebKey>;
  getApplicationKey(keyId: string): Promise<JsonWebKey>;
  listGroupAssignments(queryParameters: any): Collection;
  listKeys(): Collection;
}


