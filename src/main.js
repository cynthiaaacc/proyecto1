import express from 'express'
import bodyParser from 'body-parser'
import { Edge } from 'edge.js'
import db from './database/mockDatabase.js'

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('src/public'))

const edge = Edge.create()
edge.mount(new URL('./views', import.meta.url))

app.get('/', (req, res) => {
  const html = edge.renderSync('home')
  res.send(html)
});

app.get('/blog', (req, res) => {
  const data = {
    posts: db.posts
  }
  const html = edge.renderSync('blog', data)
  res.send(html)
});

app.post('/blog/post/save', (req, res) => {
  db.posts.push(req.body)
  res.send()
});
app.get('/blog/post', (req, res) => {
  res.send(db.posts)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})