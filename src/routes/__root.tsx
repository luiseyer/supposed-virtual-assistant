import App from '@/App'
import { RootRoute } from '@tanstack/react-router'

export const Route = new RootRoute({
  component: () => <App />,
})