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
 * @interface CreateOneTimeSecretRequest
 */
export interface CreateOneTimeSecretRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateOneTimeSecretRequest
     */
    OneTimeSecretPublicKey: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOneTimeSecretRequest
     */
    OneTimeSecretEncryptedPrivateKey: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOneTimeSecretRequest
     */
    OneTimeSecretContentType: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOneTimeSecretRequest
     */
    OneTimeSecretEncryptedContent: string;
}

export function CreateOneTimeSecretRequestFromJSON(json: any): CreateOneTimeSecretRequest {
    return CreateOneTimeSecretRequestFromJSONTyped(json, false);
}

export function CreateOneTimeSecretRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOneTimeSecretRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'OneTimeSecretPublicKey': json['OneTimeSecretPublicKey'],
        'OneTimeSecretEncryptedPrivateKey': json['OneTimeSecretEncryptedPrivateKey'],
        'OneTimeSecretContentType': json['OneTimeSecretContentType'],
        'OneTimeSecretEncryptedContent': json['OneTimeSecretEncryptedContent'],
    };
}

export function CreateOneTimeSecretRequestToJSON(value?: CreateOneTimeSecretRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OneTimeSecretPublicKey': value.OneTimeSecretPublicKey,
        'OneTimeSecretEncryptedPrivateKey': value.OneTimeSecretEncryptedPrivateKey,
        'OneTimeSecretContentType': value.OneTimeSecretContentType,
        'OneTimeSecretEncryptedContent': value.OneTimeSecretEncryptedContent,
    };
}

