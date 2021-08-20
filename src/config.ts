export const cipherMode = "aes-256-cbc";
export const ivLength = 16;
export const defaultIv = Buffer.alloc(16, 0);
export const encryptionKeyLenBytes = 64;
export const apiEndpoint = process.env.WHITEHEAD_API_ENDPOINT || "https://api.whitehead.ai/hasura/v1/graphql";
export const authEndpoint = process.env.WHITEHEAD_AUTH_ENDPOINT || "https://auth.whitehead.ai/generateHasuraJWT";

export default {
  apiEndpoint,
  authEndpoint,
  cipherMode,
  defaultIv,
  ivLength,
  encryptionKeyLenBytes,
};
