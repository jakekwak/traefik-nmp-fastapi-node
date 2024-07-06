const fastify = require("fastify")({ logger: true });
fastify.get("/", async (request, reply) => {
  return { message: "Hello world! I'm Node-SERVER #0" };
});
const start = async () => {
  try {
    await fastify.listen(3000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
