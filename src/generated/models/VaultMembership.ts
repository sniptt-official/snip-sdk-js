/* tslint:disable */
/* eslint-disable */
/**
 * Sniptt API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VaultMembership
 */
export interface VaultMembership {
    /**
     * 
     * @type {string}
     * @memberof VaultMembership
     */
    Role: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMembership
     */
    VaultOwnerAccountId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMembership
     */
    VaultName: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMembership
     */
    VaultOwnerAccountEmail: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMembership
     */
    VaultId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMembership
     */
    VaultOwnerAccountName: string;
}

export function VaultMembershipFromJSON(json: any): VaultMembership {
    return VaultMembershipFromJSONTyped(json, false);
}

export function VaultMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultMembership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Role': json['Role'],
        'VaultOwnerAccountId': json['VaultOwnerAccountId'],
        'VaultName': json['VaultName'],
        'VaultOwnerAccountEmail': json['VaultOwnerAccountEmail'],
        'VaultId': json['VaultId'],
        'VaultOwnerAccountName': json['VaultOwnerAccountName'],
    };
}

export function VaultMembershipToJSON(value?: VaultMembership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Role': value.Role,
        'VaultOwnerAccountId': value.VaultOwnerAccountId,
        'VaultName': value.VaultName,
        'VaultOwnerAccountEmail': value.VaultOwnerAccountEmail,
        'VaultId': value.VaultId,
        'VaultOwnerAccountName': value.VaultOwnerAccountName,
    };
}


