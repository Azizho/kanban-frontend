'use client'

import { AuthCheck } from '@/components/auth-check'
import React from 'react'
import { HomeBody } from './components/body/body'

const HomePage = () => {
	return (
		<>
			<HomeBody />
			
		</>
	)
}

export default AuthCheck(HomePage)