import { BackApiConfig } from "./config";
import { UserAuthApi } from "./_generated/apis/AuthApi";

export class BackApi {
  constructor(private config: BackApiConfig = new BackApiConfig()) {}
   
  readonly userAuth = new UserAuthApi(this.config)
}
