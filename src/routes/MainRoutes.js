import { useRoutes } from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { AdPage } from "../pages/AdPage";
import { NewAd } from "../pages/NewAd";
import { RequireAuth } from "../helpers/RequireAuth";
import { Ads } from "../pages/Ads";
import { MyAccount } from "../pages/MyAccount";
import { EditAd } from "../pages/EditAd";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/ad/:id', element: <AdPage /> },
        { path: '/ads', element: <Ads /> },
        { path: '/post-an-ad', element: <RequireAuth><NewAd /></RequireAuth> },
        { path: '/my-account', element: <RequireAuth><MyAccount /></RequireAuth> },
        { path: '/edit-ad/:id', element: <RequireAuth><EditAd /></RequireAuth> },
        { path: '*', element: <NotFound /> },
    ]);
}