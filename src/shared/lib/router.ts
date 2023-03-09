import Router from "next/router";
import { DependencyList, useEffect } from "react";

export interface IRouterPage {
  href: string;
  // open: () => Promise<boolean>;
  // openReplace: () => Promise<boolean>;
}

class RouterPage implements IRouterPage {
  constructor(public readonly href: string) {}

  // public open = () => Router.push(this.href);
  // public openReplace = () => Router.replace(this.href);
}

export const page = (href: string) => ({ href });

export const useRouterChange = (callback: () => void, deps: DependencyList = []) => {
  useEffect(() => {
    Router.events.on("routeChangeStart", callback);
    return () => Router.events.off("routeChangeStart", callback);
  }, deps);
};