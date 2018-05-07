import { Router } from 'express'

import mail from './mail'

const router = Router()

// Add mail Route
router.use(mail)

export default router
