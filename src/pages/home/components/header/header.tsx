'use client'
import { Logo } from '@/assets/icons/logo'
import { MoreLogo } from '@/assets/icons/more'
import { PlusLogo } from '@/assets/icons/plus'
import { ResLogo } from '@/assets/icons/res-logo'
import { useMode } from '@/mode'
import Link from 'next/link'
import React, { FC } from 'react'
import { ArrowButton } from './../../../../assets/icons/arrow-bottom'

export const Header: FC<{ isSide: boolean, title?: string }> = ({ isSide, title }) => {
	const { mode } = useMode()
	return (
		<header className='bg-kanban_white_100 dark:bg-kanban_black_300 border-b-2 border-kanban_white_300 dark:border-kanban_black_400 '>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-8 max-sm:gap-4'>
					<div className={`py-8 pl-8 ${isSide ? "pr-20" : "pr-8"} border-r-2 border-kanban_white_300 dark:border-kanban_black_400 max-sm:p-5`}>
						<Link href={"/"} className=' max-sm:hidden'>
							<Logo mode={mode} />
						</Link>
						<Link href={"/"} className='hidden max-sm:block'>
							<ResLogo />
						</Link>
					</div>
					<div className='flex items-center gap-2 '>
						<h2 className='font-plus_jakarta_sans font-bold text-2xl leading-normal dark:text-kanban_white_100 max-sm:text-lg text-kanban_black_100'>{title ? title : "Platform Launch"}</h2>
						<div className='hidden max-sm:block mr-1'>
							<ArrowButton />
						</div>
					</div>
				</div>
				<div className='flex items-center gap-6 pr-8'>
					<div>
						<button className='text-sm leading-none font-bold text-kanban_white_100 rounded-3xl bg-kanban_blueviolet_100 pt-4 pb-4 pl-6 pr-6  max-sm:hidden'>+ Add New Task</button>
						<button className='hidden  rounded-3xl bg-kanban_blueviolet_100 p-4 max-sm:block'><PlusLogo /></button>
					</div>
					<div>
						<button className='outline-none border-none cursor-pointer'>
							<MoreLogo />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
