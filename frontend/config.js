
export const API = process.env.PRODUCTION ? process.env.NEXT_PUBLIC_API_PRODUCTION : process.env.NEXT_PUBLIC_API_DEVELOPMENT
export const APP_NAME = process.env.APP_NAME;
export const KEY = process.env.PRODUCTION ? process.env.PROD_MERCHANT_KEY : process.env.TEST_MERCHANT_KEY
export const SALT = process.env.PRODUCTION ? process.env.PROD_MERCHANT_SALT : process.env.TEST_MERCHANT_SALT
export const PAYMENT_URL = process.env.PRODUCTION ? process.env.PROD_PAYMENT_URL : process.env.TEST_PAYMENT_URL
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

export const DOMAIN = process.env.PRODUCTION ? process.env.DOMAIN_PRODUCTION : process.env.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = process.env.FB_APP_ID;