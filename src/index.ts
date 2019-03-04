
export function regexFromRoute( route: string ) {
  return new RegExp( `^${
    route
      .replace( /\//g, '\\/' )
      .replace( /(:([^\/\\]+))/g, '(?<$2>[^/?]+)' )
    }$` );
}


export function routeparamsFromUrl(
  url: string,
  route: string | RegExp
): { [ k: string ]: string } {
  const regex = 'string' === typeof route ? regexFromRoute( route ) : route,
    match = url.match( regex );

  return match && match.groups || {};
}
