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
 * @interface AddSecretRequest
 */
export interface AddSecretRequest {
    /**
     * 
     * @type {string}
     * @memberof AddSecretRequest
     */
    SecretName: string;
    /**
     * 
     * @type {string}
     * @memberof AddSecretRequest
     */
    SecretContentType: string;
    /**
     * 
     * @type {string}
     * @memberof AddSecretRequest
     */
    VaultId: string;
    /**
     * 
     * @type {string}
     * @memberof AddSecretRequest
     */
    SecretEncryptedContent: string;
}

export function AddSecretRequestFromJSON(json: any): AddSecretRequest {
    return AddSecretRequestFromJSONTyped(json, false);
}

export function AddSecretRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddSecretRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'SecretName': json['SecretName'],
        'SecretContentType': json['SecretContentType'],
        'VaultId': json['VaultId'],
        'SecretEncryptedContent': json['SecretEncryptedContent'],
    };
}

export function AddSecretRequestToJSON(value?: AddSecretRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SecretName': value.SecretName,
        'SecretContentType': value.SecretContentType,
        'VaultId': value.VaultId,
        'SecretEncryptedContent': value.SecretEncryptedContent,
    };
}


