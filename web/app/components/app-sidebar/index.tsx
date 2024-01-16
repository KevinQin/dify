<<<<<<< HEAD
import React from 'react'
=======
import React, { useCallback, useState } from 'react'
>>>>>>> main
import NavLink from './navLink'
import type { NavIcon } from './navLink'
import AppBasic from './basic'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
<<<<<<< HEAD
=======
import {
  AlignLeft01,
  AlignRight01,
} from '@/app/components/base/icons/src/vender/line/layout'
>>>>>>> main

export type IAppDetailNavProps = {
  iconType?: 'app' | 'dataset' | 'notion'
  title: string
  desc: string
  icon: string
  icon_background: string
  navigation: Array<{
    name: string
    href: string
    icon: NavIcon
    selectedIcon: NavIcon
  }>
  extraInfo?: React.ReactNode
}

const AppDetailNav = ({ title, desc, icon, icon_background, navigation, extraInfo, iconType = 'app' }: IAppDetailNavProps) => {
<<<<<<< HEAD
  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile
  const mode = isMobile ? 'collapse' : 'expand'

  return (
    <div className="flex flex-col sm:w-56 w-16 overflow-y-auto bg-white border-r border-gray-200 shrink-0 mobile:h-screen">
      <div className="flex flex-shrink-0 p-4">
        <AppBasic mode={mode} iconType={iconType} icon={icon} icon_background={icon_background} name={title} type={desc} />
      </div>
      <nav className="flex-1 p-4 space-y-1 bg-white">
        {navigation.map((item, index) => {
          return (
            <NavLink key={index} mode={mode} iconMap={{ selected: item.selectedIcon, normal: item.icon }} name={item.name} href={item.href} />
=======
  const localeMode = localStorage.getItem('app-detail-collapse-or-expand') || 'expand'
  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile
  const mode = isMobile ? 'collapse' : 'expand'
  const [modeState, setModeState] = useState(isMobile ? mode : localeMode)
  const expand = modeState === 'expand'

  const handleToggle = useCallback(() => {
    setModeState((prev) => {
      const next = prev === 'expand' ? 'collapse' : 'expand'
      localStorage.setItem('app-detail-collapse-or-expand', next)
      return next
    })
  }, [])

  return (
    <div
      className={`
        shrink-0 flex flex-col bg-white border-r border-gray-200 transition-all
        ${expand ? 'w-[216px]' : 'w-14'}
      `}
    >
      <div
        className={`
          shrink-0
          ${expand ? 'p-4' : 'p-2'}
        `}
      >
        <AppBasic
          mode={modeState}
          iconType={iconType}
          icon={icon}
          icon_background={icon_background}
          name={title}
          type={desc}
        />
      </div>
      <nav
        className={`
          grow space-y-1 bg-white
          ${expand ? 'p-4' : 'px-2.5 py-4'}
        `}
      >
        {navigation.map((item, index) => {
          return (
            <NavLink key={index} mode={modeState} iconMap={{ selected: item.selectedIcon, normal: item.icon }} name={item.name} href={item.href} />
>>>>>>> main
          )
        })}
        {extraInfo ?? null}
      </nav>
<<<<<<< HEAD
=======
      {
        !isMobile && (
          <div
            className={`
              shrink-0 py-3
              ${expand ? 'px-6' : 'px-4'}
            `}
          >
            <div
              className='flex items-center justify-center w-6 h-6 text-gray-500 cursor-pointer'
              onClick={handleToggle}
            >
              {
                expand
                  ? <AlignLeft01 className='w-[14px] h-[14px]' />
                  : <AlignRight01 className='w-[14px] h-[14px]' />
              }
            </div>
          </div>
        )
      }
>>>>>>> main
    </div>
  )
}

export default React.memo(AppDetailNav)
