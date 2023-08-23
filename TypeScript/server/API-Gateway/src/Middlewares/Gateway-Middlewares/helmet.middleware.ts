import helmet from 'helmet';
 
export const helmetMiddleware = helmet({
 
  xssFilter: true,
  noSniff: true ,
  hsts: {
    maxAge: 63072000,
    includeSubDomains: true,
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", 'https:'],
      connectSrc: ["'self'", 'https:'],
      policy: "default-src 'self' https:; img-src * data:; style-src 'self' https: 'unsafe-inline'; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; font-src 'self' https: data:;",
    },
  },
  crossOriginEmbedderPolicy: {
    policy: "require-corp",
  },
  crossOriginOpenerPolicy: {
    policy: "same-origin",
  },
  crossOriginResourcePolicy: {
    policy: 'same-origin',
  },
  originAgentCluster: true,
  referrerPolicy: { policy: 'no-referrer' },
  xDnsPrefetchControl: { allow: false },
  xDownloadOptions: true,
  xFrameOptions: { action: "deny" },
  xPermittedCrossDomainPolicies: {
    permittedPolicies: "none",
  },
 });
