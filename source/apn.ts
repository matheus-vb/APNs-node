import apn from "apn";
import { env } from "./env";

let options: apn.ProviderOptions = {
    token: {
        key: "./auth-key.p8",
        keyId: env.KEY_ID,
        teamId: env.TEAM_ID,
    },
    production: false
}

export const apnProvider = new apn.Provider(options);