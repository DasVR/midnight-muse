// Runs only for /api/* (see wrangler.jsonc). Everything else is static.
import { EmailMessage } from "cloudflare:email";
import { handleLetter } from "./letter.js";

export default {
  async fetch(request, env) {
    var url = new URL(request.url);
    if (url.pathname === "/api/letter") {
      return handleLetter(request, env, function (mail) {
        return env.LETTER_MAIL.send(new EmailMessage(mail.from, mail.to, mail.raw));
      });
    }
    return new Response("Not found", { status: 404 });
  }
};
