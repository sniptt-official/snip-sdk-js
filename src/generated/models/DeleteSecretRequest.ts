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
 * @interface DeleteSecretRequest
 */
export interface DeleteSecretRequest {
    /**
     * 
     * @type {string}
     * @memberof DeleteSecretRequest
     */
    SecretName: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteSecretRequest
     */
    VaultId: string;
}

export function DeleteSecretRequestFromJSON(json: any): DeleteSecretRequest {
    return DeleteSecretRequestFromJSONTyped(json, false);
}

export function DeleteSecretRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteSecretRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'SecretName': json['SecretName'],
        'VaultId': json['VaultId'],
    };
}

export function DeleteSecretRequestToJSON(value?: DeleteSecretRequest | null): any {
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


