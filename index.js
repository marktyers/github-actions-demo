
/* index.js */

import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import views from 'koa-views'
import fs from 'fs-extra'

const app = new Koa()
const router = new Router()

app.use(serve('public'))
// you need to install the "handlebars" package
app.use(views('views', { extension: 'handlebars' }, {map: { handlebars: 'handlebars' }}))

const defaultPort = 8080
const port = process.env.PORT || defaultPort

router.get('/', async ctx => {
	const json = await fs.readJson('./public/quotes.json')
	console.log(json)
	await ctx.render('quotes', json)
})

app.use(router.routes())
app.listen(port, () => console.log(`listening on port ${port}`))
