import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
import { State } from './pages/State'


export const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/state',
        component: State
    }

]
