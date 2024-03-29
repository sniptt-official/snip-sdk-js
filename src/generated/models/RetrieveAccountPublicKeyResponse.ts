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
 * @interface RetrieveAccountPublicKeyResponse
 */
export interface RetrieveAccountPublicKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof RetrieveAccountPublicKeyResponse
     */
    AccountId: string;
    /**
     * 
     * @type {string}
     * @memberof RetrieveAccountPublicKeyResponse
     */
    AccountPublicKey: string;
}

export function RetrieveAccountPublicKeyResponseFromJSON(json: any): RetrieveAccountPublicKeyResponse {
    return RetrieveAccountPublicKeyResponseFromJSONTyped(json, false);
}

export function RetrieveAccountPublicKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveAccountPublicKeyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'AccountId': json['AccountId'],
        'AccountPublicKey': json['AccountPublicKey'],
    };
}

export function RetrieveAccountPublicKeyResponseToJSON(value?: RetrieveAccountPublicKeyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountId': value.AccountId,
        'AccountPublicKey': value.AccountPublicKey,
    };
}


