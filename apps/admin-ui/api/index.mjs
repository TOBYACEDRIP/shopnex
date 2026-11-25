// Vercel entry: one function serves everything that isn't a static file in dist/client (see vercel.json, which
// rewrites all other paths here). Exported as a Web handler ({ fetch }), so Vercel passes the standard Request
// straight to TanStack Start's handler; going through a Node request listener left POST bodies unread.
import handler from '../dist/server/server.js'

export default {
  fetch: (request) => handler.fetch(request),
}
