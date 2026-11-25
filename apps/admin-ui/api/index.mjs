// Vercel entry: one Node function serves everything that isn't a static file in dist/client (see vercel.json, which
// rewrites all other paths here). Same app as server.mjs, as a request listener instead of a listening server.
import { getRequestListener } from '@hono/node-server'
import { Hono } from 'hono'
import handler from '../dist/server/server.js'

const app = new Hono()
app.all('*', (c) => handler.fetch(c.req.raw))

export default getRequestListener(app.fetch)
