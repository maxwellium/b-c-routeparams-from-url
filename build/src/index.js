"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function regexFromRoute(route) {
    return new RegExp(`^${route
        .replace(/\//g, '\\/')
        .replace(/(:([^\/\\]+))/g, '(?<$2>[^/?]+)')}$`);
}
exports.regexFromRoute = regexFromRoute;
function routeparamsFromrl(url, route, regex = regexFromRoute(route)) {
    const match = url.match(regex);
    return match && match.groups || {};
}
exports.routeparamsFromrl = routeparamsFromrl;
//# sourceMappingURL=index.js.map