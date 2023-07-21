import { BottomNavigation } from '@components'

interface Props {
  children?: React.ReactNode
}

export const Page: React.FC<Props> = ({ children }) => (
  <>
    {children}
    <BottomNavigation />
  </>
)
