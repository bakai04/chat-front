import { isBrowser } from "shared/lib";
import { Tokens } from "./lib";
import { successAuthMiddleware } from "./middleware/success-auth-middleware";
import { Configuration, ConfigurationParameters, HTTPHeaders } from "./_generated";

const base: ConfigurationParameters = {
  basePath: process.env.API_URL,
};

const browser: ConfigurationParameters = {
  ...base,
  get headers(): HTTPHeaders {
    const accessToken = Tokens.getAccessToken();
    return accessToken ? { "Authorization":  "Bearer " + accessToken } : {};
  },
  middleware: [{ post: successAuthMiddleware }],
};

const server: ConfigurationParameters = {
  ...base,
  fetchApi: fetch,
};

export class BackApiConfig extends Configuration {
  constructor() {
    super(isBrowser() ? browser : server);
  }
}
