import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <>
      <div>BaseLayout</div>
      <Outlet />
    </>
  )
}

export default BaseLayout
