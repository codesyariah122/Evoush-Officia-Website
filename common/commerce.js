import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY);

export default client;