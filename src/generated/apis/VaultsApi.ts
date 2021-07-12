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


import * as runtime from '../runtime';
import {
    AddMemberToVaultRequest,
    AddMemberToVaultRequestFromJSON,
    AddMemberToVaultRequestToJSON,
    CreateVaultRequest,
    CreateVaultRequestFromJSON,
    CreateVaultRequestToJSON,
    CreateVaultResponse,
    CreateVaultResponseFromJSON,
    CreateVaultResponseToJSON,
    ListVaultMembersRequest,
    ListVaultMembersRequestFromJSON,
    ListVaultMembersRequestToJSON,
    ListVaultMembersResponse,
    ListVaultMembersResponseFromJSON,
    ListVaultMembersResponseToJSON,
    ListVaultMembershipsResponse,
    ListVaultMembershipsResponseFromJSON,
    ListVaultMembershipsResponseToJSON,
    RemoveMemberFromVaultRequest,
    RemoveMemberFromVaultRequestFromJSON,
    RemoveMemberFromVaultRequestToJSON,
    RetrieveVaultKeysRequest,
    RetrieveVaultKeysRequestFromJSON,
    RetrieveVaultKeysRequestToJSON,
    RetrieveVaultKeysResponse,
    RetrieveVaultKeysResponseFromJSON,
    RetrieveVaultKeysResponseToJSON,
    SearchVaultMembershipsRequest,
    SearchVaultMembershipsRequestFromJSON,
    SearchVaultMembershipsRequestToJSON,
    SearchVaultMembershipsResponse,
    SearchVaultMembershipsResponseFromJSON,
    SearchVaultMembershipsResponseToJSON,
} from '../models';

export interface AddMemberToVaultOperationRequest {
    addMemberToVaultRequest: AddMemberToVaultRequest;
    xApiKey?: string;
}

export interface CreateVaultOperationRequest {
    createVaultRequest: CreateVaultRequest;
    xApiKey?: string;
}

export interface ListVaultMembersOperationRequest {
    listVaultMembersRequest: ListVaultMembersRequest;
    xApiKey?: string;
}

export interface ListVaultMembershipsRequest {
    body: object;
    xApiKey?: string;
}

export interface RemoveMemberFromVaultOperationRequest {
    removeMemberFromVaultRequest: RemoveMemberFromVaultRequest;
    xApiKey?: string;
}

export interface RetrieveVaultKeysOperationRequest {
    retrieveVaultKeysRequest: RetrieveVaultKeysRequest;
    xApiKey?: string;
}

export interface SearchVaultMembershipsOperationRequest {
    searchVaultMembershipsRequest: SearchVaultMembershipsRequest;
    xApiKey?: string;
}

/**
 * 
 */
export class VaultsApi extends runtime.BaseAPI {

    /**
     * Add member to vault
     * Add member to vault
     */
    async addMemberToVaultRaw(requestParameters: AddMemberToVaultOperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.addMemberToVaultRequest === null || requestParameters.addMemberToVaultRequest === undefined) {
            throw new runtime.RequiredError('addMemberToVaultRequest','Required parameter requestParameters.addMemberToVaultRequest was null or undefined when calling addMemberToVault.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/addMemberToVault`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddMemberToVaultRequestToJSON(requestParameters.addMemberToVaultRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add member to vault
     * Add member to vault
     */
    async addMemberToVault(addMemberToVaultRequest: AddMemberToVaultRequest, xApiKey?: string): Promise<void> {
        await this.addMemberToVaultRaw({ addMemberToVaultRequest: addMemberToVaultRequest, xApiKey: xApiKey });
    }

    /**
     * Create vault
     * Create vault
     */
    async createVaultRaw(requestParameters: CreateVaultOperationRequest): Promise<runtime.ApiResponse<CreateVaultResponse>> {
        if (requestParameters.createVaultRequest === null || requestParameters.createVaultRequest === undefined) {
            throw new runtime.RequiredError('createVaultRequest','Required parameter requestParameters.createVaultRequest was null or undefined when calling createVault.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/createVault`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateVaultRequestToJSON(requestParameters.createVaultRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateVaultResponseFromJSON(jsonValue));
    }

    /**
     * Create vault
     * Create vault
     */
    async createVault(createVaultRequest: CreateVaultRequest, xApiKey?: string): Promise<CreateVaultResponse> {
        const response = await this.createVaultRaw({ createVaultRequest: createVaultRequest, xApiKey: xApiKey });
        return await response.value();
    }

    /**
     * List vault members
     * List vault members
     */
    async listVaultMembersRaw(requestParameters: ListVaultMembersOperationRequest): Promise<runtime.ApiResponse<ListVaultMembersResponse>> {
        if (requestParameters.listVaultMembersRequest === null || requestParameters.listVaultMembersRequest === undefined) {
            throw new runtime.RequiredError('listVaultMembersRequest','Required parameter requestParameters.listVaultMembersRequest was null or undefined when calling listVaultMembers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/listVaultMembers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ListVaultMembersRequestToJSON(requestParameters.listVaultMembersRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListVaultMembersResponseFromJSON(jsonValue));
    }

    /**
     * List vault members
     * List vault members
     */
    async listVaultMembers(listVaultMembersRequest: ListVaultMembersRequest, xApiKey?: string): Promise<ListVaultMembersResponse> {
        const response = await this.listVaultMembersRaw({ listVaultMembersRequest: listVaultMembersRequest, xApiKey: xApiKey });
        return await response.value();
    }

    /**
     * List vault memberships
     * List vault memberships
     */
    async listVaultMembershipsRaw(requestParameters: ListVaultMembershipsRequest): Promise<runtime.ApiResponse<ListVaultMembershipsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling listVaultMemberships.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/listVaultMemberships`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListVaultMembershipsResponseFromJSON(jsonValue));
    }

    /**
     * List vault memberships
     * List vault memberships
     */
    async listVaultMemberships(body: object, xApiKey?: string): Promise<ListVaultMembershipsResponse> {
        const response = await this.listVaultMembershipsRaw({ body: body, xApiKey: xApiKey });
        return await response.value();
    }

    /**
     * Remove member from vault
     * Remove member from vault
     */
    async removeMemberFromVaultRaw(requestParameters: RemoveMemberFromVaultOperationRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.removeMemberFromVaultRequest === null || requestParameters.removeMemberFromVaultRequest === undefined) {
            throw new runtime.RequiredError('removeMemberFromVaultRequest','Required parameter requestParameters.removeMemberFromVaultRequest was null or undefined when calling removeMemberFromVault.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/removeMemberFromVault`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RemoveMemberFromVaultRequestToJSON(requestParameters.removeMemberFromVaultRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove member from vault
     * Remove member from vault
     */
    async removeMemberFromVault(removeMemberFromVaultRequest: RemoveMemberFromVaultRequest, xApiKey?: string): Promise<void> {
        await this.removeMemberFromVaultRaw({ removeMemberFromVaultRequest: removeMemberFromVaultRequest, xApiKey: xApiKey });
    }

    /**
     * Retrieve vault keys
     * Retrieve vault keys
     */
    async retrieveVaultKeysRaw(requestParameters: RetrieveVaultKeysOperationRequest): Promise<runtime.ApiResponse<RetrieveVaultKeysResponse>> {
        if (requestParameters.retrieveVaultKeysRequest === null || requestParameters.retrieveVaultKeysRequest === undefined) {
            throw new runtime.RequiredError('retrieveVaultKeysRequest','Required parameter requestParameters.retrieveVaultKeysRequest was null or undefined when calling retrieveVaultKeys.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/retrieveVaultKeys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RetrieveVaultKeysRequestToJSON(requestParameters.retrieveVaultKeysRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RetrieveVaultKeysResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve vault keys
     * Retrieve vault keys
     */
    async retrieveVaultKeys(retrieveVaultKeysRequest: RetrieveVaultKeysRequest, xApiKey?: string): Promise<RetrieveVaultKeysResponse> {
        const response = await this.retrieveVaultKeysRaw({ retrieveVaultKeysRequest: retrieveVaultKeysRequest, xApiKey: xApiKey });
        return await response.value();
    }

    /**
     * Search vault memberships
     * Search vault memberships
     */
    async searchVaultMembershipsRaw(requestParameters: SearchVaultMembershipsOperationRequest): Promise<runtime.ApiResponse<SearchVaultMembershipsResponse>> {
        if (requestParameters.searchVaultMembershipsRequest === null || requestParameters.searchVaultMembershipsRequest === undefined) {
            throw new runtime.RequiredError('searchVaultMembershipsRequest','Required parameter requestParameters.searchVaultMembershipsRequest was null or undefined when calling searchVaultMemberships.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['x-api-key'] = String(requestParameters.xApiKey);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = this.configuration.apiKey("X-API-KEY"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/searchVaultMemberships`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SearchVaultMembershipsRequestToJSON(requestParameters.searchVaultMembershipsRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchVaultMembershipsResponseFromJSON(jsonValue));
    }

    /**
     * Search vault memberships
     * Search vault memberships
     */
    async searchVaultMemberships(searchVaultMembershipsRequest: SearchVaultMembershipsRequest, xApiKey?: string): Promise<SearchVaultMembershipsResponse> {
        const response = await this.searchVaultMembershipsRaw({ searchVaultMembershipsRequest: searchVaultMembershipsRequest, xApiKey: xApiKey });
        return await response.value();
    }

}