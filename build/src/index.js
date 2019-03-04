"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function regexFromRoute(route) {
    return new RegExp(`^${route
        .replace(/\//g, '\\/')
        .replace(/(:([^\/\\]+))/g, '(?<$2>[^/?]+)')}$`);
}
exports.regexFromRoute = regexFromRoute;
function routeparamsFromUrl(url, route) {
    const regex = 'string' === typeof route ? regexFromRoute(route) : route, match = url.match(regex);
    return match && match.groups || {};
}
exports.routeparamsFromUrl = routeparamsFromUrl;
//# sourceMappingURL=index.js.map