import { ResponseContext } from "../_generated/runtime";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export const successAuthMiddleware = async (context: ResponseContext): Promise<Response | void> => {
  let url = context.url;

  if (url.startsWith(baseUrl)) {
    url = url.substring(baseUrl.length);
  }

  if (
    context.response.ok &&
    url.match("/api/user/auth/auth-key/([a-zA-Z0-9-]*)/api-key") &&
    context.init.method === "POST"
  ) {
    const response = await context.response.json();
  }

  if (context.response.status === 401) {
    return;
  }
};
