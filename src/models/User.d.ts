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

import { Collection } from './../collection';
import { Resource } from '../resource';
import { Client } from "../client";
import { UserCredentials } from "./UserCredentials";
import { UserProfile } from "./UserProfile";
import { UserStatus } from "./UserStatus";
import { ForgotPasswordResponse } from "./ForgotPasswordResponse";
import { Role } from "./Role";
import { UserActivationToken } from "./UserActivationToken";
import { ResetPasswordToken } from "./ResetPasswordToken";
import { TempPassword } from "./TempPassword";
import { Factor } from "./Factor";
import { ChangePasswordRequest } from './ChangePasswordRequest';

/**
 * @class User
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } activated
 * @property { dateTime } created
 * @property { UserCredentials } credentials
 * @property { string } id
 * @property { dateTime } lastLogin
 * @property { dateTime } lastUpdated
 * @property { dateTime } passwordChanged
 * @property { UserProfile } profile
 * @property { UserStatus } status
 * @property { dateTime } statusChanged
 * @property { UserStatus } transitioningToStatus
 */
export class User extends Resource {
  _embedded: string;
  _links: string;
  activated: Date;
  created: Date;
  credentials: UserCredentials;
  id: string;
  lastLogin: Date;
  lastUpdated: Date;
  passwordChanged: Date;
  profile: UserProfile;
  status: UserStatus;
  statusChanged: Date;
  transitioningToStatus: UserStatus;
  constructor(resourceJson: any, client: Client);

  update(): Promise<User>;
  delete(): Request;
  endAllSessions(queryParameters: any): Request;
  listAppLinks(queryParameters: any): Collection;
  changePassword(changePasswordRequest: ChangePasswordRequest): Promise<UserCredentials>;
  changeRecoveryQuestion(userCredentials: UserCredentials): Promise<UserCredentials>;
  forgotPassword(userCredentials: UserCredentials, queryParameters: any): Promise<ForgotPasswordResponse>;
  listRoles(queryParameters: any): Collection;
  addRole(role: Role): Promise<Role>;
  removeRole(roleId: string): Request;
  listGroupTargetsForRole(roleId: string, queryParameters: any): Collection;
  removeGroupTargetFromRole(roleId: string, groupId: string): Request;
  addGroupTargetToRole(roleId: string, groupId: string): Request;
  listGroups(queryParameters: any): Collection;
  activate(queryParameters: any): Promise<UserActivationToken>;
  deactivate(): Request;
  suspend(): Request;
  unsuspend(): Request;
  resetPassword(queryParameters: any): Promise<ResetPasswordToken>;
  expirePassword(queryParameters: any): Promise<TempPassword>;
  unlock(): Request;
  resetFactors(): Request;
  addToGroup(groupId: string): Request;
  addFactor(factor: Factor, queryParameters: any): Promise<Factor>;
  listSupportedFactors(): Collection;
  listFactors(): Collection;
  listSupportedSecurityQuestions(): Collection;
  getFactor(factorId: string): Promise<Factor>;
}


