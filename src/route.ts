import { Obj } from './declarations';

/**
 * Fill parameters in route url
 * @param route route template
 * @param params map of values
 */
export function reverseRoute(route: string, params: Obj<string | number>): string {
    const paths = route.split('/');

    for (let i = 0; i < paths.length; i += 1) {
        let path = paths[i];

        if (path && path.length > 0 && path.charAt(0) === ':') {
            path = path.substring(1);
            let param;

            // optional parameter
            if (path.slice(-1) === '?') {
                param = params[path.replace('?', '')];

                // omit if value not supplied
                if (!param) {
                    paths.splice(i, 1);
                } else {
                    paths[i] = String(param);
                }
            } else {
                param = params[path];

                if (!param) {
                    console.error(`Value for param ${path} not supplied`);
                }

                paths[i] = String(param);
            }
        }
    }

    return paths.join('/');
}

/**
 * Identify if param is required in certain route
 * @param route route template
 * @param param parameter name
 */
export function isParamRequired(route: string, param: string) {
    const re = new RegExp(`:${param}([^\\?]|$)`);
    return route.search(re) !== -1;
}
