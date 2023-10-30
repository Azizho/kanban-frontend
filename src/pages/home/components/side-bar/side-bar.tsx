'use client'

import { EyeLogo } from '@/assets/icons/eye'
import { FluentBoardIcon } from '@/assets/icons/fluent_board'
import { useMode } from '@/mode'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import "./side-bar.scss"
import { MoonLogo } from '@/assets/icons/moon'
import { SunLogo } from '@/assets/icons/sun'

type DataT = {
  _id: string
  title: string
  todos: [],
  doing: [],
  done: [],
  createdAt: number
  lastUpdate: number
}

type SideBarPropsT = {
  data: [] | DataT[]
  tabI: string | boolean
  setTabI: Dispatch<SetStateAction<string | boolean>>
}

const SideBar: FC<SideBarPropsT> = ({ data, tabI, setTabI }) => {
  const mode = useMode()
  return (
    <div className='max-w-xs bg-kanban_white_100 dark:bg-kanban_black_300 pt-4  border-r-2 border-kanban_white_300 dark:border-kanban_black_400 flex flex-col justify-between' style={{ paddingRight: "13px", minHeight: "calc(100vh - 93px)" }}>
      <div>
        <div>
          <h3 className='font-plus_jakarta_sans text-xs leading-normal tracking-wide font-bold pb-5 pl-8'>ALL BOARDS ({data.length})</h3>
        </div>
        <div>
          <div className='pb-8 flex flex-col gap-8'>
            {data.length ? data?.map((item) => {
              if (item) {
                return (
                  <div className={`flex gap-4 items-center cursor-pointer pl-8 pb-4 pt-4 ${tabI === item._id ? "bg-kanban_blueviolet_100 text-kanban_white_100 rounded-o_one" : " "}`} onClick={() => { setTabI(item._id) }} key={item._id}>
                    <FluentBoardIcon svgColor={tabI === item._id ? "white" : 'grey'} />
                    <h3 className='text-sm leading-none font-bold'>
                      {item?.title}
                    </h3>
                  </div>
                )
              }
              return " "
            }) : " "}
          </div>
          <div className='flex gap-4 items-center cursor-pointer pl-8 mb-14'>
            <FluentBoardIcon svgColor='blueviolet' />
            <p className='text-kanban_blueviolet_100 text-sm leading-none font-bold'>+ Create New Board</p>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <div className='mb-8 dark:bg-kanban_black_200 bg-kanban_white_200 rounded-md pl-14  py-4 flex items-center gap-6 ml-3' style={{ paddingRight: "61.5px" }}>
          <SunLogo />
          <div className="checkbox-wrapper-6">
            <input className="tgl tgl-light" id="cb1-6" type="checkbox" defaultChecked={mode.mode === "dark"} onChange={(e) => {
              const { checked } = e.target
              if (checked === true) {
                return mode.setDarkMode()
              }
              return mode.setLightMode()
            }} />
            <label className="tgl-btn" htmlFor="cb1-6" />
          </div>
          <MoonLogo />
        </div>
        <div className='pl-6 flex gap-1 items-center cursor-pointer hover:bg-kanban_white_100 hover:text-kanban_blueviolet_100 hide-sidebar'>
          <EyeLogo  />
          <p>
            Hide Sidebar
          </p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
