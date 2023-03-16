import * as runtime from "../runtime";
import { DefaultResponse, IEmailConfirmDto, UserAuthDto } from "../models";

export class UserAuthApi extends runtime.BaseAPI {
  userAuthRegistrationOptions = (body: UserAuthDto):runtime.RequestOpts => {
    return {
      body,
      path: "/auth/sign-up/",
      method: "POST",
      headers: {}
    }
  }

  userAuthFetch = async (
    context: runtime.RequestOpts,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DefaultResponse>> => {
    const response = await this.request(context, initOverrides);
    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
  };

  userAuthRaw = async (
    requestParameters: UserAuthDto,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DefaultResponse>> => {
    const context = this.userAuthRegistrationOptions(requestParameters);
    return this.userAuthFetch(context, initOverrides);
  };

  userAuthRegistration = async ( body: UserAuthDto ):Promise<runtime.ApiResponse<DefaultResponse>> => {
    const response = await this.userAuthRaw(body);
    return response
  }

  emailConfirmOptions = (body: IEmailConfirmDto):runtime.RequestOpts => {
    return {
      body,
      path: "/auth/confirm/",
      method: "POST",
      headers: {}
    }
  }

  emailConfirmFetch = async (
    context: runtime.RequestOpts,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DefaultResponse>> => {
    const response = await this.request(context, initOverrides);
    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
  };

  emailConfirmRaw = async (
    requestParameters: IEmailConfirmDto,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DefaultResponse>> => {
    const context = this.emailConfirmOptions(requestParameters);
    return this.emailConfirmFetch(context, initOverrides);
  };

  emailComfirm = async ( body: IEmailConfirmDto ):Promise<runtime.ApiResponse<DefaultResponse>> => {
    const response = await this.emailConfirmRaw(body);
    return response
  }

  loginOptions = (body: Omit<UserAuthDto, "userName">):runtime.RequestOpts => {
    return {
      body,
      path: "/auth/login/",
      method: "POST",
      headers: {}
    }
  }

  loginFetch = async (
    context: runtime.RequestOpts,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DefaultResponse>> => {
    const response = await this.request(context, initOverrides);
    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
  };

  loginRaw = async (
    requestParameters: Omit<UserAuthDto, "userName">,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<DefaultResponse>> => {
    const context = this.loginOptions(requestParameters);
    return this.loginFetch(context, initOverrides);
  };

  login = async ( body: Omit<UserAuthDto, "userName"> ):Promise<runtime.ApiResponse<DefaultResponse>> => {
    const response = await this.loginRaw(body);
    return response
  }
}
 