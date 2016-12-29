declare namespace Cypress {
  type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT";
  type RequestBody = string | Object;
  type ViewportOrientation = "portrait" | "landscape";

  interface Core {
    config(): Object;
    config(key: string): any;
    config(key: string, value: any): void;
    config(object: Object): void;

    env(): Object;
    env(key: string): any;
    env(key: string, value: any): void;
    env(object: Object): void;

    addChildCommand(name: string, fn: Function): void;
    addDualCommand(name: string, fn: Function): void;
    addParentCommand(name: string, fn: Function): void;

    _: any;
    $: any;
    minimatch: any;
    moment: any;
    Blob: any;
    Promise: any;

    Cookies: {
      debug(enabled: boolean, options?: DebugOptions): void;
      preserveOnce(...names: string[]): void;
      defaults(options: CookieDefaults): void;
    };

    Dom: {
      isHidden(element: Object): boolean;
    };

    Server: {
      defaults(options: ServerOptions): void;
    };
  }

  interface Chainable {
    and(chainers: string): Chainable;
    and(chainers: string, value: any): Chainable;
    and(chainers: string, method: string, value: any): Chainable;
    and(fn: Function): Chainable;
    as(alias: string): Chainable;
    blur(options?: BlurOptions): Chainable;
    check(options?: CheckOptions): Chainable;
    check(value: string): Chainable; // no options
    check(values: string[]): Chainable; // no options
    children(options?: LoggableTimeoutable): Chainable;
    children(selector: string, options?: LoggableTimeoutable): Chainable;
    clear(options?: ClearOptions): Chainable;
    clearCookie(name: string, options?: LoggableTimeoutable): Chainable;
    clearCookies(options?: LoggableTimeoutable): Chainable;
    clearLocalStorage(): Chainable;
    clearLocalStorage(key: string): Chainable;
    clearLocalStorage(re: RegExp): Chainable;
    click(options?: ClickOptions): Chainable;
    click(position: string, options?: ClickOptions): Chainable;
    click(x: number, y: number, options?: ClickOptions): Chainable;
    closest(selector: string, options?: LoggableTimeoutable): Chainable;
    contains(text: string, options?: LoggableTimeoutable): Chainable;
    contains(num: number): Chainable;
    contains(re: RegExp): Chainable;
    contains(selector: string, text: string, options?: LoggableTimeoutable): Chainable;
    dblclick(options?: Loggable): Chainable;
    debug(options?: Loggable): Chainable;
    document(options?: Loggable): Chainable;
    each(fn: Function): Chainable;
    end(): Chainable;
    eq(index: number, options?: LoggableTimeoutable): Chainable;
    exec(command: string, options?: ExecOptions): Chainable;
    filter(selector: string, options?: LoggableTimeoutable): Chainable;
    find(selector: string, options?: LoggableTimeoutable): Chainable;
    first(options?: LoggableTimeoutable): Chainable;
    fixture(path: string, options?: Timeoutable): Chainable; // no log
    fixture(path: string, encoding: string, options?: Timeoutable): Chainable; // no log
    focus(options?: Loggable): Chainable;
    focused(options?: Loggable): Chainable;
    get(selector: string, options?: LoggableTimeoutable): Chainable;
    get(alias: string, options?: LoggableTimeoutable): Chainable;
    getCookie(name: string, options?: LoggableTimeoutable): Chainable;
    getCookies(options?: LoggableTimeoutable): Chainable;
    go(direction: "back" | "forward", options?: LoggableTimeoutable): Chainable;
    go(num: number, options?: LoggableTimeoutable): Chainable;
    hash(options?: Loggable): Chainable;
    invoke(functionName: string): Chainable;
    invoke(functionName: string, ...args: any[]): Chainable;
    its(propertyName: string): Chainable;
    last(options?: LoggableTimeoutable): Chainable;
    location(options?: Loggable): Chainable;
    log(message: string, args: any): Chainable;
    next(options?: LoggableTimeoutable): Chainable;
    next(selector: string, options?: LoggableTimeoutable): Chainable;
    not(selector: string, options?: LoggableTimeoutable): Chainable;
    parent(options?: LoggableTimeoutable): Chainable;
    parent(selector: string, options?: LoggableTimeoutable): Chainable;
    parents(options?: LoggableTimeoutable): Chainable;
    parents(selector: string, options?: LoggableTimeoutable): Chainable;
    pause(options?: Loggable): Chainable;
    prev(options?: LoggableTimeoutable): Chainable;
    prev(selector: string, options?: LoggableTimeoutable): Chainable;
    readFile(filePath: string, options?: Timeoutable): Chainable; // no log
    readFile(filePath: string, encoding: string, options?: Timeoutable): Chainable; // no log
    reload(options?: LoggableTimeoutable): Chainable;
    reload(forceReload: boolean): Chainable; // no options
    request(url: string): Chainable;
    request(url: string, body: RequestBody): Chainable;
    request(method: HttpMethod, url: string): Chainable;
    request(method: HttpMethod, url: string, body: RequestBody): Chainable;
    request(options: RequestOptions): Chainable;
    root(options?: Loggable): Chainable;
    route(url: string): Chainable;
    route(url: string, response: any): Chainable;
    route(method: string, url: string): Chainable;
    route(method: string, url: string, response: any): Chainable;
    route(fn: Function): Chainable;
    route(options: RouteOptions): Chainable;
    screenshot(options?: LoggableTimeoutable): Chainable;
    screenshot(fileName: string, options?: LoggableTimeoutable): Chainable;
    select(text: string, options?: SelectOptions): Chainable;
    select(value: string, options?: SelectOptions): Chainable;
    select(texts: string[], options?: SelectOptions): Chainable;
    select(values: string[], options?: SelectOptions): Chainable;
    server(options?: ServerOptions): Chainable;
    setCookie(name: string, value: string, options?: SetCookieOptions): Chainable;
    should(chainers: string): Chainable;
    should(chainers: string, value: any): Chainable;
    should(chainers: string, method: string, value: any): Chainable;
    should(fn: Function): Chainable;
    siblings(options?: LoggableTimeoutable): Chainable;
    siblings(selector: string, options?: LoggableTimeoutable): Chainable;
    spread(fn: Function): Chainable;
    submit(options?: Loggable): Chainable;
    then(fn: Function): Chainable;
    title(options?: Loggable): Chainable;
    type(text: string, options?: TypeOptions): Chainable;
    uncheck(options?: CheckOptions): Chainable;
    uncheck(values: string[]): Chainable; // no options, missing single value
    url(options?: Loggable): Chainable;
    viewport(width: number, height: number, options?: Loggable): Chainable;
    viewport(preset: string, orientation: ViewportOrientation, options?: Loggable): Chainable;
    visit(url: string, options?: VisitOptions): Chainable;
    wait(ms: number): Chainable; // no options?
    wait(alias: string, options?: LoggableTimeoutable): Chainable;
    wait(aliases: string[]): Chainable; // no options?
    window(options?: Loggable): Chainable;
    within(fn: Function): Chainable;
    within(options: Loggable, fn: Function): Chainable; // inconsistent argument order
    wrap(object: Object, options?: Loggable): Chainable;
    writeFile(filePath: string, contents: string | any[] | Object, options?: Timeoutable): Chainable;
    writeFile(filePath: string, contents: string | any[] | Object, encoding: string, options?: Timeoutable): Chainable;
  }

  interface DebugOptions {
    verbose?: boolean;
  }

  interface CookieDefaults extends SetCookieOptions {
    whitelist?: string | string[] | RegExp | Function;
  }

  interface Loggable {
    log?: boolean;
  }

  interface Timeoutable {
    timeout?: number;
  }

  interface LoggableTimeoutable extends Loggable, Timeoutable {}

  interface BlurOptions extends Loggable {
    force?: boolean;
  }

  interface CheckOptions extends Loggable, Timeoutable {
    interval?: number;
    force?: boolean;
  }

  interface ClearOptions extends Loggable, Timeoutable {
    force?: boolean;
    interval?: number;
  }

  interface ClickOptions extends Loggable, Timeoutable {
    force?: boolean;
    multiple?: boolean;
    interval?: number;
  }

  interface ExecOptions extends Loggable, Timeoutable {
    failOnNonZeroExit?: boolean;
    env?: Object;
  }

  interface RequestOptions extends Loggable, Timeoutable {
    auth?: Object;
    body?: RequestBody;
    failOnStatusCode?: boolean;
    followRedirect?: boolean;
    form?: boolean;
    gzip?: boolean;
    headers?: Object;
    method?: HttpMethod;
    qs?: string;
    url: string;
  }

  interface RouteOptions {
    method?: HttpMethod;
    url?: string | RegExp;
    response?: any;
    status?: number;
    delay?: number;
    headers?: Object;
    force404?: boolean;
    onRequest?: Function;
    onResponse?: Function;
    onAbort?: Function;
  }

  interface SelectOptions extends Loggable, Timeoutable {
    force?: boolean;
    interval?: number;
  }

  interface ServerOptions {
    delay?: number;
    method?: HttpMethod;
    status?: number;
    headers?: Object;
    response?: any;
    onRequest?: Function;
    onResponse?: Function;
    onAbort?: Function;
    enable?: boolean;
    force404?: boolean;
    urlMatchingOptions?: Object;
    whitelist?: Function;
  }

  interface SetCookieOptions extends Loggable, Timeoutable {
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    expiry?: number;
  }

  interface TypeOptions extends Loggable, Timeoutable {
    delay?: number;
    force?: boolean;
    release?: boolean;
    interval?: number;
  }

  interface VisitOptions extends Loggable, Timeoutable {
    onBeforeLoad?: Function;
    onLoad?: Function;
  }
}

declare const Cypress: Cypress.Core;
declare const cy: Cypress.Chainable;
