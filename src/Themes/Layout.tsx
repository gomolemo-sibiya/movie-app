import { Header } from '../Components/Header'
import { MainRoutes } from '../Routes/MainRoutes';

export const Layout = () => {
    return (
      <div>
        <Header />
        <MainRoutes />
      </div>
    )
}

export default Layout