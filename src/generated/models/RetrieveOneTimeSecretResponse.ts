/* tslint:disable */
/* eslint-disable */
/**
 * API Reference
 * # Introduction The Sniptt API is organized around [REST](https://en.wikipedia.org/wiki/Representational_State_Transfer). Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns [JSON-encoded](http://www.json.org/) responses, and uses standard HTTP response codes, authentication, and verbs. # Authentication The Sniptt API uses API keys to authenticate requests. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. Use your API key by setting it in the initial configuration of sniptt. The Sniptt SDK will then automatically send this key in each request. You can also set a per-request key by passing `x-api-key` in the header of the request or as an additional parameter in SDK methods. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail. 
 *
 * The version of the OpenAPI document: 0.0.5
 * Contact: support@sniptt.com
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


