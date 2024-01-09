import { verifyToken } from "../lib/token.js";

export default async function (ctx, next) {
  const token = ctx.headers?.authorization?.trim()?.replace("Bearer ", "");
  ctx.assert(token, 401, "Credential is required");
  const payload = verifyToken(token);
  ctx.state.user = payload;
  await next();
}
