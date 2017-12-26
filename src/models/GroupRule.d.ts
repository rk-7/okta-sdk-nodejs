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
import { GroupRuleAction } from './GroupRuleAction';
import { GroupRuleConditions } from './GroupRuleConditions';
import { GroupRuleStatus } from './GroupRuleStatus';

/**
 * @class GroupRule
 * @extends Resource
 * @property { GroupRuleAction } actions
 * @property { GroupRuleConditions } conditions
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { GroupRuleStatus } status
 * @property { string } type
 */
export class GroupRule extends Resource {
  actions: GroupRuleAction;
  conditions: GroupRuleConditions;
  created: Date;
  id: string;
  lastUpdated: Date;
  name: string;
  status: GroupRuleStatus;
  type: string;
  constructor(resourceJson: any, client: Client);

  update(): Promise<GroupRule>;
  delete(queryParameters: any): Request;
  activate(): Request;
  deactivate(): Request;
}


