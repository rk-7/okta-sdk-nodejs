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
import { VerifyFactorRequest } from './VerifyFactorRequest';
import { Client } from "../client";
import { VerifyFactorResponse } from "./VerifyFactorResponse";
import { FactorType } from './FactorType';
import { FactorProfile } from './FactorProfile';
import { FactorProvider } from './FactorProvider';
import { FactorStatus } from './FactorStatus';

/**
 * @class Factor
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { string } device
 * @property { string } deviceType
 * @property { FactorType } factorType
 * @property { string } id
 * @property { string } mfaStateTokenId
 * @property { FactorProfile } profile
 * @property { FactorProvider } provider
 * @property { boolean } rechallengeExistingFactor
 * @property { string } sessionId
 * @property { FactorStatus } status
 * @property { string } userId
 * @property { VerifyFactorRequest } verify
 */
export class Factor extends Resource {
  _embedded: string;
  _links: string;
  device: string;
  deviceType: string;
  factorType: FactorType;
  id: string;
  mfaStateTokenId: string;
  profile: FactorProfile;
  provider: FactorProvider;
  rechallengeExistingFactor: boolean;
  sessionId: string;
  status: FactorStatus;
  userId: string;
  constructor(resourceJson: any, client: Client);

  delete(userId: string): Request;
  activate(userId: string, verifyFactorRequest: VerifyFactorRequest): Promise<Factor>
  verify(userId: string, verifyFactorRequest: VerifyFactorRequest, queryParameters: any): Promise<VerifyFactorResponse>;
}


