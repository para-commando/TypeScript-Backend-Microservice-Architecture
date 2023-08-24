
import e from 'express'
import contentSecurityPolicy from 'helmet'
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

 