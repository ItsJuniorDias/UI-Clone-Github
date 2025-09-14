/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(details)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(details)'}/styles` | `/styles`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/repositories` | `/repositories`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(details)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(details)'}/styles` | `/styles`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(app)'}/repositories` | `/repositories`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(details)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(details)'}/styles${`?${string}` | `#${string}` | ''}` | `/styles${`?${string}` | `#${string}` | ''}` | `${'/(app)'}/repositories${`?${string}` | `#${string}` | ''}` | `/repositories${`?${string}` | `#${string}` | ''}` | `${'/(app)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(details)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(details)'}/styles` | `/styles`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}/repositories` | `/repositories`; params?: Router.UnknownInputParams; } | { pathname: `${'/(app)'}` | `/`; params?: Router.UnknownInputParams; };
    }
  }
}
