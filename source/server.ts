import fastify from "fastify";
import { apnProvider } from "./apn";
import { env } from "./env";
import { sendNotification } from "./send-notification";
import { z } from "zod";

const app = fastify();
const provider = apnProvider;

app.get('/trigger/:deviceToken', async (request, reply) => {
    const triggerSchema = z.object({
        deviceToken: z.string(),
    })

    const { deviceToken } = triggerSchema.parse(request.params);

    sendNotification(deviceToken, provider);

    return reply.status(200).send({ data: "Notification sent." })
})

app.listen({
    host: "0.0.0.0",
    port: env.PORT,
}).then(() => {
    console.log(`Server running on port ${env.PORT}.`)
})