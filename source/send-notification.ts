import apn from "apn";
import { env } from "./env";

export function sendNotification(deviceToken: string, provider: apn.Provider) {
    var notification = new apn.Notification();

    notification.topic = env.BUNDLE_ID
    notification.expiry = Math.floor(Date.now() / 1000) + 3600;
    notification.badge = 3;
    notification.sound = "default";
    notification.alert = "SPORT CLUB DO RECIFE.";
    notification.payload = {'messageFrom': 'Node.js'};

    provider.send(notification, deviceToken).then((result) => {
        console.log(result.failed)
        console.log(result.sent)
    })
}