import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
} from "react-router-dom";
//import { RouteContext } from "react-router/dist/lib/context";

import { RouteError } from "./routes/RouteError";
import { RouteCards } from "./routes/RouteCards";
import { RouteAbout } from "./routes/RouteAbout";
import { LoginOrRegister } from "./routes/AccountsRouter";
import { RouteDetail } from "./routes/RouteDetail";
import { Home } from "./routes/Home";
import { Index } from "./routes/Index";
import { AppProvider } from "./context/ContextPrivider";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppProvider><Home/></AppProvider>} errorElement={<RouteError/>}>
        <Route errorElement={<RouteError/>} >
            <Route index={true} element={<Index/>}/>
            <Route path="accounts/:login_or_register" element={<LoginOrRegister/>} />
            <Route path="users/:user_name" />
            <Route path="cards" element={<RouteCards/>} />
            <Route path="about" element={<RouteAbout/>} />
            <Route path="detail/:detailId" element={<RouteDetail/>} />
        </Route>
    </Route>
));

export default function App () {
    return (
        <RouterProvider router={router} />
    )
}