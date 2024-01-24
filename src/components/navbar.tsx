import { SearchInput } from '@components'
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'

interface Props extends React.HTMLProps<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
}

const classNames = {
  base: 'bg-default-900',
  brand: 'flex items-center gap-4 text-default-300 text-xl',
}

export const Navbar: React.FC<Props> = ({ title, icon, children }) => {
  return (
    <NextNavbar position='static' classNames={classNames}>
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
