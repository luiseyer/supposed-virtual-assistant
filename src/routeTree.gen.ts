// This file is auto-generated by TanStack Router

import { FileRoute, lazyRouteComponent } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SettingsComponentImport = new FileRoute('/settings').createRoute()
const ProjectsComponentImport = new FileRoute('/projects').createRoute()
const ChatComponentImport = new FileRoute('/chat').createRoute()
const IndexComponentImport = new FileRoute('/').createRoute()

// Create/Update Routes

const SettingsComponentRoute = SettingsComponentImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/settings.component'),
    'component',
  ),
})

const ProjectsComponentRoute = ProjectsComponentImport.update({
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/projects.component'),
    'component',
  ),
})

const ChatComponentRoute = ChatComponentImport.update({
  path: '/chat',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/chat.component'),
    'component',
  ),
})

const IndexComponentRoute = IndexComponentImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).update({
  component: lazyRouteComponent(
    () => import('./routes/index.component'),
    'component',
  ),
})

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexComponentImport
      parentRoute: typeof rootRoute
    }
    '/chat': {
      preLoaderRoute: typeof ChatComponentImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      preLoaderRoute: typeof ProjectsComponentImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      preLoaderRoute: typeof SettingsComponentImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexComponentRoute,
  ChatComponentRoute,
  ProjectsComponentRoute,
  SettingsComponentRoute,
])
