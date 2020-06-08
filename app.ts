import { Application,send } from "https://deno.land/x/oak/mod.ts";
import { readFileStr, readFileStrSync } from "https://deno.land/std/fs/mod.ts";
const HOST = '127.0.0.1';
const PORT = 4000;

const app = new Application();

app.use(async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/public`,
      index: "index.html",
    });
});

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);