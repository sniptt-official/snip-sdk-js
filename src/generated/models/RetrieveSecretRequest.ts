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
 * @interface RetrieveSecretRequest
 */
export interface RetrieveSecretRequest {
    /**
     * 
     * @type {string}
     * @memberof RetrieveSecretRequest
     */
    SecretName: string;
    /**
     * 
     * @type {string}
     * @memberof RetrieveSecretRequest
     */
    VaultId: string;
}

export function RetrieveSecretRequestFromJSON(json: any): RetrieveSecretRequest {
    return RetrieveSecretRequestFromJSONTyped(json, false);
}

export function RetrieveSecretRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveSecretRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'SecretName': json['SecretName'],
        'VaultId': json['VaultId'],
    };
}

export function RetrieveSecretRequestToJSON(value?: RetrieveSecretRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SecretName': value.SecretName,
        'VaultId': value.VaultId,
    };
}


