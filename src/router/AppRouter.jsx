import { Route, Routes } from "react-router-dom"
import PageNotFound from "../auth/pages/PageNotFound"
import { AdminRoute } from "../admin/routes/AdminRoutes"
import { UserRouter } from "../user/routes/UserRoutes"
import { PrivateRouteAdmin } from "./PrivateRouteAdmin"
import { PrivateRouteUser } from "./PrivateRouteUser"
import { PublicRoute } from "./PublicRoute"
import LoginPage  from "../auth/pages/LoginPage"

export const AppRouter = () =>{
    return(
        <>
            
            <Routes>
                <Route path="/" element={<>Bienvenido a la biblioteca</>} />
                
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
                }/>

                <Route path="/user/*" element={
                    <PrivateRouteUser>
                        <UserRouter/>
                    </PrivateRouteUser>
             }/>
                <Route path="/admin/*" element={
                    <PrivateRouteAdmin>
                        <AdminRoute/>
                    </PrivateRouteAdmin>
                 }/>

                 <Route path="/*" element={<PageNotFound/>} />
            </Routes>
        </>
    )
}