import "isomorphic-fetch";

import { Configuration, FetchAPI, SnipttApi } from "./generated";

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

class Sniptt extends SnipttApi {
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
    super(
      new Configuration({
        apiKey: opts.apiKey,
        basePath: opts.basePath || "https://api.sniptt.com",
        fetchApi: opts.fetchApi || fetch,
      })
    );
  }
}

export default Sniptt;
