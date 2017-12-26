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
import { PasswordCredential } from "./PasswordCredential";
import { AuthenticationProvider } from "./AuthenticationProvider";
import { RecoveryQuestionCredential } from "./RecoveryQuestionCredential";

/**
 * @class UserCredentials
 * @extends Resource
 * @property { PasswordCredential } password
 * @property { AuthenticationProvider } provider
 * @property { RecoveryQuestionCredential } recovery_question
 */
export class UserCredentials extends Resource {
  password: PasswordCredential;
  provider: AuthenticationProvider;
  recovery_question: RecoveryQuestionCredential;
  constructor(resourceJson: any, client: Client);

}


