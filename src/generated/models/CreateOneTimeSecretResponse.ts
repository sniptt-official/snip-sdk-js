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
 * @interface CreateOneTimeSecretResponse
 */
export interface CreateOneTimeSecretResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateOneTimeSecretResponse
     */
    OneTimeSecretId: string;
}

export function CreateOneTimeSecretResponseFromJSON(json: any): CreateOneTimeSecretResponse {
    return CreateOneTimeSecretResponseFromJSONTyped(json, false);
}

export function CreateOneTimeSecretResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOneTimeSecretResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'OneTimeSecretId': json['OneTimeSecretId'],
    };
}

export function CreateOneTimeSecretResponseToJSON(value?: CreateOneTimeSecretResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'OneTimeSecretId': value.OneTimeSecretId,
    };
}


