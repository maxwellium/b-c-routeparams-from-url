export declare function regexFromRoute(route: string): RegExp;
export declare function routeparamsFromUrl(url: string, route: string | RegExp): {
    [k: string]: string;
};
