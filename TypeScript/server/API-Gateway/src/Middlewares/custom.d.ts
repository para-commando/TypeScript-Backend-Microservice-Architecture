
import e from 'express'
import contentSecurityPolicy from '../../../../../node_modules/helmet/index.mjs'
import * as OptionsT from 'express-rate-limit'
declare module 'express' {
    interface RequestModified extends e.Request {
        decodedTokenData: object;
        header(name: 'Authorization'): string | undefined;
    }
    interface ResponseModified extends e.Response {
    }
    interface NextFunctionModified extends e.NextFunction { };
    type Secret =
        | string
        | Buffer
        | KeyObject
        | { key: string | Buffer; passphrase: string };
}

declare module 'helmet' {
    interface ContentSecurityPolicyOptions extends contentSecurityPolicy {
        defaultSrc: any[];
    }

}

 
declare module 'express-rate-limit' {
    type Options = { headersTimeout: number } & OptionsT.Options
}