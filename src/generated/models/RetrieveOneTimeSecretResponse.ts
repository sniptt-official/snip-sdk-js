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
 * @interface RetrieveOneTimeSecretResponse
 */
export interface RetrieveOneTimeSecretResponse {
    /**
     * 
     * @type {string}
     * @memberof RetrieveOneTimeSecretResponse
     */
    OneTimeSecretPublicKey: string;
    /**
     * 
     * @type {string}
     * @memberof RetrieveOneTimeSecretResponse
     */
    OneTimeSecretId: string;
    /**
     * 
     * @type {string}
     * @memberof RetrieveOneTimeSecretResponse
     */
    OneTimeSecretEncryptedPrivateKey: string;
    /**
     * 
     * @type {string}
     * @memberof RetrieveOneTimeSecretResponse
     */
    OneTimeSecretEncryptedContent: string;
}

export function RetrieveOneTimeSecretResponseFromJSON(json: any): RetrieveOneTimeSecretResponse {
    return RetrieveOneTimeSecretResponseFromJSONTyped(json, false);
}

export function RetrieveOneTimeSecretResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetrieveOneTimeSecretResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'OneTimeSecretPublicKey': json['OneTimeSecretPublicKey'],
        'OneTimeSecretId': json['OneTimeSecretId'],
        'OneTimeSecretEncryptedPrivateKey': json['OneTimeSecretEncryptedPrivateKey'],
        'OneTimeSecretEncryptedContent': json['OneTimeSecretEncryptedContent'],
    };
}

export function RetrieveOneTimeSecretResponseToJSON(value?: RetrieveOneTimeSecretResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OneTimeSecretPublicKey': value.OneTimeSecretPublicKey,
        'OneTimeSecretId': value.OneTimeSecretId,
        'OneTimeSecretEncryptedPrivateKey': value.OneTimeSecretEncryptedPrivateKey,
        'OneTimeSecretEncryptedContent': value.OneTimeSecretEncryptedContent,
    };
}


