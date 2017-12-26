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

// import * as qs from 'querystring';

import * as models from './models';
import { Collection } from "./collection";
import { Application } from "./factories";
import { Resource } from "./resource";
import { ModelResolutionFactory } from "./resolution-factory";

/**
 * Auto-Generated API client, implements the operations as defined in the OpenaAPI JSON spec
 *
 * @class GeneratedApiClient
 */
export class GeneratedApiClient {

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @param {String} [queryParams.includeNonDeleted]
   * @description
   * Enumerates apps added to your organization with pagination. A subset of apps can be returned that match a supported filter expression or query.
   */
  listApplications(queryParameters?: any): Collection;
  /**
   *
   * @param {Application} application
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @description
   * Adds a new application to your Okta organization.
   */
  createApplication(application: Application, queryParameters?: any): Promise<Resource | ModelResolutionFactory>;

  /**
   *
   * @param appId {String}
   * @description
   * Removes an inactive application.
   */
  deleteApplication(appId: string): Request;

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches an application from your Okta organization by `id`.
   */
  getApplication(appId: string, queryParameters?: any): Promise<Resource | ModelResolutionFactory>;
  /**
   *
   * @param appId {String}
   * @param {Application} application
   * @description
   * Updates an application in your organization.
   */
  updateApplication(appId: string, application: Application): Promise<Resource | ModelResolutionFactory>;

  /**
   *
   * @param appId {String}
   * @description
   * Enumerates key credentials for an application
   */
  listApplicationKeys(appId: string): Collection

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.validityYears]
   * @description
   * Generates a new X.509 certificate for an application key credential
   */
  generateApplicationKey(appId: string, queryParameters?: any): Promise<JsonWebKey>;
  /**
   *
   * @param appId {String}
   * @param keyId {String}
   * @description
   * Gets a specific [application key credential](#application-key-credential-model) by `kid`
   */
  getApplicationKey(appId: string, keyId: string): Promise<JsonWebKey>;

  /**
   *
   * @param appId {String}
   * @param keyId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.targetAid]
   * @description
   * Clones a X.509 certificate for an application key credential from a source application to target application.
   */
  cloneApplicationKey(appId: string, keyId: string, queryParameters?: any): Promise<JsonWebKey>;

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates group assignments for an application.
   */
  listApplicationGroupAssignments(appId: string, queryParameters?: any): Collection;

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @description
   * Removes a group assignment from an application.
   */
  deleteApplicationGroupAssignment(appId: string, groupId: string): Request;

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches an application group assignment
   */
  getApplicationGroupAssignment(appId: string, groupId: string, queryParameters?: any): Promise<models.ApplicationGroupAssignment>;

  /**
   *
   * @param appId {String}
   * @param groupId {String}
   * @param {ApplicationGroupAssignment} applicationGroupAssignment
   * @description
   * Assigns a group to an application
   */
  createApplicationGroupAssignment(appId: string, groupId: string, applicationGroupAssignment: models.ApplicationGroupAssignment): Promise<models.ApplicationGroupAssignment>;

  /**
   *
   * @param appId {String}
   * @description
   * Activates an inactive application.
   */
  activateApplication(appId: string): Request;

  /**
   *
   * @param appId {String}
   * @description
   * Deactivates an active application.
   */
  deactivateApplication(appId: string): Request;

  /**
   *
   * @param appId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.query_scope]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates all assigned [application users](#application-user-model) for an application.
   */
  listApplicationUsers(appId: string, queryParameters?: any): Collection
  /**
   *
   * @param appId {String}
   * @param {AppUser} appUser
   * @description
   * Assigns an user to an application with [credentials](#application-user-credentials-object) and an app-specific [profile](#application-user-profile-object). Profile mappings defined for the application are first applied before applying any profile properties specified in the request.
   */
  assignUserToApplication(appId: string, appUser: models.AppUser): Promise<models.AppUser>;

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @description
   * Removes an assignment for a user from an application.
   */
  deleteApplicationUser(appId: string, userId: string): Request;

  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Fetches a specific user assignment for application by `id`.
   */
  getApplicationUser(appId: string, userId: string, queryParameters?: any): Promise<models.AppUser>;
  /**
   *
   * @param appId {String}
   * @param userId {String}
   * @param {AppUser} appUser
   * @description
   * Updates a user's profile for an application
   */
  updateApplicationUser(appId: string, userId: string, appUser: models.AppUser): Promise<models.AppUser>;

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.expand]
   * @description
   * Enumerates groups in your organization with pagination. A subset of groups can be returned that match a supported filter expression or query.
   */
  listGroups(queryParameters?: any): Collection;

  /**
   *
   * @param {Group} group
   * @description
   * Adds a new group with `OKTA_GROUP` type to your organization.
   */
  createGroup(group: models.Group): Promise<models.Group>;

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.after]
   * @description
   * Lists all group rules for your organization.
   */
  listRules(queryParameters?: any): Collection;

  /**
   *
   * @param {GroupRule} groupRule
   * @description
   * Creates a group rule to dynamically add users to the specified group if they match the condition
   */
  createRule(groupRule: models.GroupRule): Promise<models.GroupRule>

  /**
   *
   * @param ruleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.removeUsers]
   * @description
   * Removes a specific group rule by id from your organization
   */
  deleteRule(ruleId: string, queryParameters?: any): Request;

  /**
   *
   * @param ruleId {String}
   * @description
   * Fetches a specific group rule by id from your organization
   */
  getRule(ruleId: string): Promise<models.GroupRule>

  /**
   *
   * @param ruleId {String}
   * @param {GroupRule} groupRule
   * @description
   * Convenience method for /api/v1/groups/rules/{ruleId}
   */
  updateRule(ruleId: string, groupRule: models.GroupRule): Promise<models.GroupRule>

  /**
   *
   * @param ruleId {String}
   * @description
   * Activates a specific group rule by id from your organization
   */
  activateRule(ruleId: string): Request;

  /**
   *
   * @param ruleId {String}
   * @description
   * Deactivates a specific group rule by id from your organization
   */
  deactivateRule(ruleId: string): Request;

  /**
   *
   * @param groupId {String}
   * @description
   * Removes a group with `OKTA_GROUP` type from your organization.
   */
  deleteGroup(groupId: string): Request;

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all group rules for your organization.
   */
  getGroup(groupId: string, queryParameters?: any): Promise<models.Group>;

  /**
   *
   * @param groupId {String}
   * @param {Group} group
   * @description
   * Updates the profile for a group with `OKTA_GROUP` type from your organization.
   */
  updateGroup(groupId: string, group: models.Group): Promise<models.Group>;

  /**
   *
   * @param groupId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Enumerates all [users](/docs/api/resources/users.html#user-model) that are a member of a group.
   */
  listGroupUsers(groupId: string, queryParameters?: any): Collection;

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * Removes a [user](users.html#user-model) from a group with `OKTA_GROUP` type.
   */
  removeGroupUser(groupId: string, userId: string): Request;

  /**
   *
   * @param groupId {String}
   * @param userId {String}
   * @description
   * Adds a [user](users.html#user-model) to a group with `OKTA_GROUP` type.
   */
  addUserToGroup(groupId: string, userId: string): Request;

  /**
   *
   * @param {CreateSessionRequest} createSessionRequest
   * @description
   * Creates a new session for a user with a valid session token. Use this API if, for example, you want to set the session cookie yourself instead of allowing Okta to set it, or want to hold the session ID in order to delete a session via the API instead of visiting the logout URL.
   */
  createSession(createSessionRequest: models.CreateSessionRequest): Promise<models.Session>;

  /**
   *
   * @param sessionId {String}
   * @description
   * Convenience method for /api/v1/sessions/{sessionId}
   */
  endSession(sessionId: string): Request;

  /**
   *
   * @param sessionId {String}
   * @description
   * Get details about a session.
   */
  getSession(sessionId: string): Promise<models.Session>;

  /**
   *
   * @param sessionId {String}
   * @description
   * Convenience method for /api/v1/sessions/{sessionId}/lifecycle/refresh
   */
  refreshSession(sessionId: string): Promise<models.Session>

  /**
   *
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.q]
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @param {String} [queryParams.filter]
   * @param {String} [queryParams.format]
   * @param {String} [queryParams.search]
   * @param {String} [queryParams.expand]
   * @description
   * Lists users in your organization with pagination in most cases.  A subset of users can be returned that match a supported filter expression or search criteria.
   */
  listUsers(queryParameters?: any): Collection;

  /**
   *
   * @param {User} user
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.activate]
   * @param {String} [queryParams.provider]
   * @description
   * Creates a new user in your Okta organization with or without credentials.
   */
  createUser(user: models.User, queryParameters?: any): Promise<models.User>;

  /**
   *
   * @param userId {String}
   * @description
   * Deletes a user permanently.  This operation can only be performed on users that have a `DEPROVISIONED` status.  **This action cannot be recovered!**
   */
  deactivateOrDeleteUser(userId: string): Request;

  /**
   *
   * @param userId {String}
   * @description
   * Fetches a user from your Okta organization.
   */
  getUser(userId: string): Promise<models.User>

  /**
   *
   * @param userId {String}
   * @param {User} user
   * @description
   * Update a user's profile and/or credentials using strict-update semantics.
   */
  updateUser(userId: string, user: models.User): Promise<models.User>;

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.showAll]
   * @description
   * Fetches appLinks for all direct or indirect (via group membership) assigned applications.
   */
  listAppLinks(userId: string, queryParameters?: any): Collection;

  /**
   *
   * @param userId {String}
   * @param {ChangePasswordRequest} changePasswordRequest
   * @description
   * Changes a user's password by validating the user's current password.  This operation can only be performed on users in `STAGED`, `ACTIVE`, `PASSWORD_EXPIRED`, or `RECOVERY` status that have a valid [password credential](#password-object)
   */
  changePassword(userId: string, changePasswordRequest: models.ChangePasswordRequest): Promise<models.UserCredentials>

  /**
   *
   * @param userId {String}
   * @param {UserCredentials} userCredentials
   * @description
   * Changes a user's recovery question & answer credential by validating the user's current password.  This operation can only be performed on users in **STAGED**, **ACTIVE** or **RECOVERY** `status` that have a valid [password credential](#password-object)
   */
  changeRecoveryQuestion(userId: string, userCredentials: models.UserCredentials): Promise<models.UserCredentials>;

  /**
   *
   * @param userId {String}
   * @param {UserCredentials} userCredentials
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Generates a one-time token (OTT) that can be used to reset a user's password.  The user will be required to validate their security question's answer when visiting the reset link.  This operation can only be performed on users with a valid [recovery question credential](#recovery-question-object) and have an `ACTIVE` status.
   */
  forgotPassword(userId: string, userCredentials: models.UserCredentials, queryParameters?: any): Promise<models.ForgotPasswordResponse>;

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the enrolled factors for the specified user
   */
  listFactors(userId: string): Collection;

  /**
   *
   * @param userId {String}
   * @param {Factor} factor
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.updatePhone]
   * @param {String} [queryParams.templateId]
   * @description
   * Enrolls a user with a supported [factor](#list-factors-to-enroll)
   */
  addFactor(userId: string, factor: models.Factor, queryParameters?: any): Promise<models.Factor>;

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all the [supported factors](#supported-factors-for-providers) that can be enrolled for the specified user
   */
  listSupportedFactors(userId: string): Collection;

  /**
   *
   * @param userId {String}
   * @description
   * Enumerates all available security questions for a user's `question` factor
   */
  listSupportedSecurityQuestions(userId: string): Collection;
  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @description
   * Unenrolls an existing factor for the specified user, allowing the user to enroll a new factor.
   */
  deleteFactor(userId: string, factorId: string): Request;

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @description
   * Fetches a factor for the specified user
   */
  getFactor(userId: string, factorId: string): Promise<models.Factor>;

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @description
   * The `sms` and `token:software:totp` [factor types](#factor-type) require activation to complete the enrollment process.
   */
  activateFactor(userId: string, factorId: string, verifyFactorRequest: models.VerifyFactorRequest): Promise<models.Factor>;

  /**
   *
   * @param userId {String}
   * @param factorId {String}
   * @param {VerifyFactorRequest} verifyFactorRequest
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.templateId]
   * @description
   * Verifies an OTP for a `token` or `token:hardware` factor
   */
  verifyFactor(userId: string, factorId: string, verifyFactorRequest: models.VerifyFactorRequest, queryParameters?: any): Promise<models.VerifyFactorResponse>

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Fetches the groups of which the user is a member.
   */
  listUserGroups(userId: string, queryParameters?: any): Collection;

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.sendEmail]
   * @description
   * Activates a user.  This operation can only be performed on users with a `STAGED` status.  Activation of a user is an asynchronous operation.  The user will have the `transitioningToStatus` property with a value of `ACTIVE` during activation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `ACTIVE` when the activation process is complete.
   */
  activateUser(userId: string, queryParameters?: any): Promise<models.UserActivationToken>;

  /**
   *
   * @param userId {String}
   * @description
   * Deactivates a user.  This operation can only be performed on users that do not have a `DEPROVISIONED` status.  Deactivation of a user is an asynchronous operation.  The user will have the `transitioningToStatus` property with a value of `DEPROVISIONED` during deactivation to indicate that the user hasn't completed the asynchronous operation.  The user will have a status of `DEPROVISIONED` when the deactivation process is complete.
   */
  deactivateUser(userId: string): Request;
  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.tempPassword]
   * @description
   * This operation transitions the user to the status of `PASSWORD_EXPIRED` so that the user is required to change their password at their next login.
   */
  expirePassword(userId: string, queryParameters?: any): Promise<models.TempPassword>;

  /**
   *
   * @param userId {String}
   * @description
   * This operation resets all factors for the specified user. All MFA factor enrollments returned to the unenrolled state. The user's status remains ACTIVE. This link is present only if the user is currently enrolled in one or more MFA factors.
   */
  resetAllFactors(userId: string): Request;

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.provider]
   * @param {String} [queryParams.sendEmail]
   * @description
   * Generates a one-time token (OTT) that can be used to reset a user's password.  The OTT link can be automatically emailed to the user or returned to the API caller and distributed using a custom flow.
   */
  resetPassword(userId: string, queryParameters?: any): Promise<models.ResetPasswordToken>;

  /**
   *
   * @param userId {String}
   * @description
   * Suspends a user.  This operation can only be performed on users with an `ACTIVE` status.  The user will have a status of `SUSPENDED` when the process is complete.
   */
  suspendUser(userId: string): Request;

  /**
   *
   * @param userId {String}
   * @description
   * Unlocks a user with a `LOCKED_OUT` status and returns them to `ACTIVE` status.  Users will be able to login with their current password.
   */
  unlockUser(userId: string): Request;

  /**
   *
   * @param userId {String}
   * @description
   * Unsuspends a user and returns them to the `ACTIVE` state.  This operation can only be performed on users that have a `SUSPENDED` status.
   */
  unsuspendUser(userId: string): Request;

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.expand]
   * @description
   * Lists all roles assigned to a user.
   */
  listAssignedRoles(userId: string, queryParameters?: any): Collection;

  /**
   *
   * @param userId {String}
   * @param {Role} role
   * @description
   * Assigns a role to a user.
   */
  addRoleToUser(userId: string, role: models.Role): Promise<models.Role>

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @description
   * Unassigns a role from a user.
   */
  removeRoleFromUser(userId: string, roleId: string): Request;

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.after]
   * @param {String} [queryParams.limit]
   * @description
   * Convenience method for /api/v1/users/{userId}/roles/{roleId}/targets/groups
   */
  listGroupTargetsForRole(userId: string, roleId: string, queryParameters?: any): Collection;

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * Convenience method for /api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}
   */
  removeGroupTargetFromRole(userId: string, roleId: string, groupId: string): Request;

  /**
   *
   * @param userId {String}
   * @param roleId {String}
   * @param groupId {String}
   * @description
   * Convenience method for /api/v1/users/{userId}/roles/{roleId}/targets/groups/{groupId}
   */
  addGroupTargetToRole(userId: string, roleId: string, groupId: string): Request;

  /**
   *
   * @param userId {String}
   * @param {Object} queryParams Map of query parameters to add to this request
   * @param {String} [queryParams.oauthTokens]
   * @description
   * Removes all active identity provider sessions. This forces the user to authenticate on the next operation. Optionally revokes OpenID Connect and OAuth refresh and access tokens issued to the user.
   */
  endAllUserSessions(userId: string, queryParameters?: any): Request;

}
