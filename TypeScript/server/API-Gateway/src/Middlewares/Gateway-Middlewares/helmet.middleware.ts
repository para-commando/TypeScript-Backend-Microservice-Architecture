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
      imgSrc: ['*', 'data:'],
      styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
      scriptSrc: ["'self'", 'https:', "'unsafe-inline'", "'unsafe-eval'"],
      fontSrc: ["'self'", 'https:', 'data:'],
      upgradeInsecureRequests: [],
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
