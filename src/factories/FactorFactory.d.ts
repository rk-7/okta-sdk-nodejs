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


/*eslint-disable no-unused-vars*/
import { ModelResolutionFactory } from '../resolution-factory';
import * as models from '../models';

export class FactorFactory extends ModelResolutionFactory {
  getMapping(): {
    'call': typeof models.CallFactor,
    'email': typeof models.EmailFactor,
    'push': typeof models.PushFactor,
    'question': typeof models.SecurityQuestionFactor,
    'sms': typeof models.SmsFactor,
    'token': typeof models.TokenFactor,
    'token:hardware': typeof models.HardwareFactor,
    'token:software:totp': typeof models.TotpFactor,
    'web': typeof models.WebFactor,
  };

  getResolutionProperty(): string;
}
