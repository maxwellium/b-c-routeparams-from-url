export declare function regexFromRoute(route: string): RegExp;
export declare function routeparamsFromrl(url: string, route: string, regex?: RegExp): {
    [key: string]: string;
};
