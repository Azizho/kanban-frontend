"use client"

import { request } from '@/config/request'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { Loading } from '@/components/loading'

const AuthCheck = (WrappedComponent: () => JSX.Element, register?: boolean) => {
  const AuthCheckComponent: FC = (props) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      const token = localStorage.getItem('token')
      if (register) {
        if (token) {
          request.get('/boards').then(res => {
            if (res.status === 200) {
              router.push('/')
            } else {
              setIsLoading(false)
            }
          }).catch(err => {
            console.log(err)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      } else if (!token) {
        router.push('/login')
      } else {
        request.get('/boards').then(res => {
          if (res.status !== 200) {
            router.push('/login')
          } else {
            setIsLoading(false)
          }
        }).catch(err => {
          router.push('/login')
          setIsLoading(false)
        })
      }
    }, [router])
    return (
      <>
        {isLoading ? <Loading /> : null}
        {!isLoading && <WrappedComponent {...props} />}
      </>
    )
  }

  return AuthCheckComponent
}

export default AuthCheck
