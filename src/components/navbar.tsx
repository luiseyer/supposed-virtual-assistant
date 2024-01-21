import { SearchInput } from '@components'
import { Navbar as NextNavbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'

interface Props {
  icon?: React.ReactNode
  title: string
  children?: React.ReactNode
}

export const Navbar: React.FC<Props> = ({ title, icon, children }) => {
  return (
    <NextNavbar
      position='static'
      classNames={{
        base: 'bg-default-900',
        brand: 'flex items-center gap-4 text-default-300 text-xl',
      }}
    >
      <NavbarBrand>
        {icon}
        <p>{title}</p>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <SearchInput />
        </NavbarItem>
        {children}
      </NavbarContent>
    </NextNavbar>
  )
}
