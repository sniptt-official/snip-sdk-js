/* tslint:disable */
/* eslint-disable */
/**
 * API Reference
 * # Introduction The Sniptt API is organized around [REST](https://en.wikipedia.org/wiki/Representational_State_Transfer). Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns [JSON-encoded](http://www.json.org/) responses, and uses standard HTTP response codes, authentication, and verbs. # Authentication The Sniptt API uses API keys to authenticate requests. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. Use your API key by setting it in the initial configuration of sniptt. The Sniptt SDK will then automatically send this key in each request. You can also set a per-request key by passing `x-api-key` in the header of the request or as an additional parameter in SDK methods. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail. 
 *
 * The version of the OpenAPI document: 0.0.5
 * Contact: support@sniptt.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Role,
    RoleFromJSON,
    RoleFromJSONTyped,
    RoleToJSON,
} from './';

/**
 * 
 * @export
 * @interface VaultMember
 */
export interface VaultMember {
    /**
     * 
     * @type {Role}
     * @memberof VaultMember
     */
    Role: Role;
    /**
     * 
     * @type {string}
     * @memberof VaultMember
     */
    AccountId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMember
     */
    AccountEmail: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMember
     */
    AccountPublicKey: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMember
     */
    AccountName: string;
}

export function VaultMemberFromJSON(json: any): VaultMember {
    return VaultMemberFromJSONTyped(json, false);
}

export function VaultMemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultMember {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Role': RoleFromJSON(json['Role']),
        'AccountId': json['AccountId'],
        'AccountEmail': json['AccountEmail'],
        'AccountPublicKey': json['AccountPublicKey'],
        'AccountName': json['AccountName'],
    };
}

export function VaultMemberToJSON(value?: VaultMember | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Role': RoleToJSON(value.Role),
        'AccountId': value.AccountId,
        'AccountEmail': value.AccountEmail,
        'AccountPublicKey': value.AccountPublicKey,
        'AccountName': value.AccountName,
    };
}


