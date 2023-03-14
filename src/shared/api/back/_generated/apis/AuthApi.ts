import * as runtime from "../runtime";
import { UserAuthDto } from "../models";

 export class UserAuthApi extends runtime.BaseAPI {

  userAuthRegistrationOptions = (body: UserAuthDto):runtime.RequestOpts => {
    return {
      body,
      path: "/auth/sign-up/",
      method: "POST",
      headers: {}
    }
  }

  userAuthRegistration = async ( body: UserAuthDto ):Promise<runtime.ApiResponse<UserAuthDto>> => {
    const requestOptions = this.userAuthRegistrationOptions(body);
    const response = await this.request(requestOptions);
    
    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
  }
}
 