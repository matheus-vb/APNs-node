# APNs-remote-trigger
## Remote server for triggering push notifications via Apple Push Notification Service using NodeJS.

To run server and connect to app:
- Get APNs key from Apple Developer dashboard
- Add a .env file in the server's root, with the attributes:
  - `KEY_ID` -> from the key generated from Apple Developer's page
  - `TEAM_ID` -> the developers ID, also found on the Apple Developer's dashboard
  - `PORT` -> (optional) the servers port
  - `BUNDLE_ID` -> the App's bundle ID from Xcode
- Run `npm ci` to install dependencies
- To run the server, use the `npm run dev` command
- To access route triggering the notification, make a GET request to `http://localhost:<PORT>/trigger/<DEVICE_TOKEN>`
  - The `PORT` indicates the server port (default: 3001), and the `DEVICE_TOKEN` is obtained within the app's AppDelegate
- Setup app's AppDelegate to allow receiving notifications (https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns)
