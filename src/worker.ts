import { Hono } from 'hono'
import { handle } from '@astrojs/cloudflare/handler'

const app = new Hono<{ Bindings: Env }>()

app.get('/time', (c) => c.text(new Date().toISOString()))
app.all('*', (c) => handle(c.req.raw, c.env, c.executionCtx as ExecutionContext))

export default {
  fetch: app.fetch
}
