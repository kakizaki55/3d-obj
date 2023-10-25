const express = require('express')
const cors = require('cors')

const fetch = (...args) => {
  import ('node-fetch').then(({default: fetch }) => fetch(...args))
}

const bodyParser = require('body-parser')

const CLIENT_ID = "926da06118abf355444f"
const CLIENT_SECRET = "1f1f7195a98bb2ccbab95490b90767bf75cfaee2"

const app = express()

app.use(cors())
app.use(bodyParser.json)

app.get('/getAccessToken', async function(req, res) {
  console.log('CLIENT_ID', CLIENT_ID)
  console.log('CLIENT_ID', CLIENT_SECRET)
  console.log('req.query.code', req.query.code)
  const params =`?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`

  await fetch("https://github.com/login/oauth.access_token" + params, {
    method: "POST",
    headers: { 
       "Accept": "application/json"
    }
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log('data', data)
    res.json(data)
  })
})

app.get('getUserData', async function(req, res) {
  req.get("Authorization")
  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      "Authorization": req.get("Authorization")
    }
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log('data', data)
    res.json(data)
  })
})

app.listen(4000, () => {
  console.log('CORS server running on port 4000')
})