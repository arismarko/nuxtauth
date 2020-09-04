import express from 'express'
import fetchData from './fetchData';

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', async (req, res) => {
  const fetchdata = new fetchData();

  const credentials = {
    email: req.body.username,
    password: req.body.password
  }

  const result = await fetchdata.loginUser(
    credentials,
  );
  

  if (result.length > 0) {
    req.session.authUser= {
      username:  result[0].user,
      authority: result[0].role, 
      sid: 1123224234234
    }
    
    return res.json({ 
      username: result[0].user, 
      authority: result[0].role, 
      sid: 1123224234234,
    })
  } else {
    return res.status(401).json({ message: 'Bad credentials' })
  }
});


// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

router.post('/teamdata', async (req, res) => {

})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}