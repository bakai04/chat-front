 import useSWR, { SWRConfiguration, SWRResponse } from "swr";
import { UserAuthDto } from "../models";
import { ApiResponse, BaseAPI, JSONApiResponse, RequestOpts } from "../runtime";

 export class UserAuthApi extends BaseAPI {
  userAuthRegistrationOptions = (body: UserAuthDto):RequestOpts => {
    return {
      body,
      path: "/auth/registration",
      method: "POST",
      headers: {}
    }
  }

  userAuthRegistration = async ( body: UserAuthDto ):Promise<ApiResponse<UserAuthDto>> => {
    const requestOptions = this.userAuthRegistrationOptions(body);
    const response = await this.request(requestOptions);
    return new JSONApiResponse(response, (jsonValue) => jsonValue);
  }
}
 