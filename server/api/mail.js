import { Router } from 'express'
import { apiKey, domain, defaultTo } from '../helpers/mailgun.js'

const mailgun = require('mailgun-js')({ apiKey, domain })

const router = Router()

/* GET: Proxy to send mail */
router.get('/mail', (req, res, next) => {
  const { from, text } = req.query
  if (!from || !text) {
    return res.status(400).json({ message: 'Missing \'from\' or \'text\' params.'})
  }
  const subject = 'Contact Liberté Esthétique'
  const message = `
    <h3>Message:</h3>
    <p>${text}</p>
    <p>de la part de ${from}</p>
  `
  const data = {
    from,
    subject,
    to: defaultTo,
    text: message
  }
  mailgun.messages()
    .send(data, function (error, body) {
      if (error) {
        console.error('mail', error)
        return res.status(500).json({ message: 'fail' })
      }
      return res.json(body)
  })
})

export default router
