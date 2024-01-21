import { SideMenu } from '@components'
import { Sidebar } from '@layouts'
import { NextUIProvider } from '@nextui-org/react'
import { Outlet } from '@tanstack/react-router'

const App: React.FC = () => {
  return (
    <NextUIProvider>
      <div className='flex max-h-dvh min-h-dvh'>
        <Sidebar>
          <SideMenu />
        </Sidebar>

        <main className='flex grow flex-col gap-4 bg-default-900 p-6 pb-24'>
          <Outlet />
        </main>
      </div>
    </NextUIProvider>
  )
}

export default App
