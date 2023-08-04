import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Chats, Dashboard, Profile, Settings } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'chats',
        element: <Chats />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
