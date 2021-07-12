import "isomorphic-fetch";

import {
  AccountsApi,
  Configuration,
  FetchAPI,
  OneTimeSecretsApi,
  SecretsApi,
  VaultsApi,
} from "./generated";

/**
 * Sniptt options.
 */
type SnipttOpts = {
  // Obtain an apiKey using the [`snip-cli`](https://github.com/sniptt-official/snip-cli).
  apiKey?: string;
  // Optional API base path.
  basePath?: string;
  // Optional fetch override.
  fetchApi?: FetchAPI;
};

class Sniptt {
  public readonly accounts: AccountsApi;
  public readonly vaults: VaultsApi;
  public readonly secrets: SecretsApi;
  public readonly oneTimeSecrets: OneTimeSecretsApi;

  /**
   * Create a new Sniptt instance.
   *
   * Contains top level convenience functions. Access the full API controllers as properties on the instance.
   *
   * ```typescript
   * import Sniptt from '@sniptt/snip-sdk-js'
   * const sniptt = new Sniptt({ apiKey })
   * ```
   * @param opts
   */
  constructor(opts: SnipttOpts) {
    const _fetch: any = opts.fetchApi || fetch;

    const clientConfiguration = new Configuration({
      apiKey: opts.apiKey,
      basePath: opts.basePath || "https://api.sniptt.com",
      fetchApi: opts.fetchApi || fetch,
    });

    const args = [clientConfiguration, clientConfiguration.basePath, _fetch];

    this.accounts = new AccountsApi(...args);
    this.secrets = new SecretsApi(...args);
    this.oneTimeSecrets = new OneTimeSecretsApi(...args);
    this.vaults = new VaultsApi(...args);
  }
}

export default Sniptt;
