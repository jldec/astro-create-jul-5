import { Hono } from 'hono'
import { handle } from '@astrojs/cloudflare/handler'

const app = new Hono<{ Bindings: Env }>()

app.get('/time', (c) => {
  const time = new Date().toISOString()
  const cf = c.req.raw.cf
  const colo = cf?.colo ?? 'unknown'
  const city = cf?.city ?? 'unknown'
  const country = cf?.country ?? 'unknown'
  return c.text(`${time}\n${colo} ${city} ${country}`)
})
app.all('*', (c) => handle(c.req.raw, c.env, c.executionCtx as ExecutionContext))

export default {
  fetch: app.fetch
}
