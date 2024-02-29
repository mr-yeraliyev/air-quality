// routes.ts
import { Route, RouteProps } from 'react-router-dom'
import { AuthLayout, BaseLayout } from './layouts'
import { About, Home } from './components'
import { ForgotPassword, Login, SignUp } from './views'

const baseLayoutChildren: RouteProps[] = [
  {
    path: '',
    element: <Home />,
  },

  {
    path: 'about',
    element: <About />,
  },
]

const authLayoutChildren: RouteProps[] = [
  {
    path: '',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
]

const routes: RouteProps[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: baseLayoutChildren.map((route: RouteProps, index: number) => (
      <Route key={index} {...route} />
    )),
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: authLayoutChildren.map((route: RouteProps, index: number) => (
      <Route key={index} {...route} />
    )),
  },
]

export default routes
