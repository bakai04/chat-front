import { isBrowser } from "../lib";
import { BackApi } from "./back/back-api";

export const api = new BackApi();

if (isBrowser()) {
  (window as any).api = api;
}
