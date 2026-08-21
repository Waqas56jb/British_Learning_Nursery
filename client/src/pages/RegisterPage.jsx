import { useEffect } from 'react'
import { SITE } from '../data'

export default function RegisterPage() {
  useEffect(() => {
    window.location.replace(SITE.registerForm)
  }, [])

  return null
}
