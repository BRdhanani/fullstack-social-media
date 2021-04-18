import { lazy } from 'react'

export const routes = {
  dashboard: {
    path: '/',
    component: lazy(() => import('../pages/Posts/Posts')),
    exact: true,
  },
  signup: {
    path: '/signup',
    component: lazy(() => import('../components/Signup/Signup')),
    exact: true,
  },
}

export const renderRoutes = Object.entries(routes)
