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
 * @interface SearchVaultMembershipsRequest
 */
export interface SearchVaultMembershipsRequest {
    /**
     * 
     * @type {string}
     * @memberof SearchVaultMembershipsRequest
     */
    VaultName: string;
}

export function SearchVaultMembershipsRequestFromJSON(json: any): SearchVaultMembershipsRequest {
    return SearchVaultMembershipsRequestFromJSONTyped(json, false);
}

export function SearchVaultMembershipsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchVaultMembershipsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'VaultName': json['VaultName'],
    };
}

export function SearchVaultMembershipsRequestToJSON(value?: SearchVaultMembershipsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'VaultName': value.VaultName,
    };
}


