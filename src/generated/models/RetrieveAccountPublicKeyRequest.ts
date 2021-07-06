/* tslint:disable */
/* eslint-disable */
/**
 * Sniptt API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.3
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
 * @interface RetrieveAccountPublicKeyRequest
 */
export interface RetrieveAccountPublicKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof RetrieveAccountPublicKeyRequest
     */
    AccountEmail: string;
}

export function RetrieveAccountPublicKeyRequestFromJSON(json: any): RetrieveAccountPublicKeyRequest {
    return RetrieveAccountPublicKeyRequestFromJSONTyped(json, false);
}

export function RetrieveAccountPublicKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveAccountPublicKeyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'AccountEmail': json['AccountEmail'],
    };
}

export function RetrieveAccountPublicKeyRequestToJSON(value?: RetrieveAccountPublicKeyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountEmail': value.AccountEmail,
    };
}


