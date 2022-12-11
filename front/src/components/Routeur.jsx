import { Routes, Route } from "react-router-dom"
import Middleware from "./Middleware"
import { routes } from "./config/path.js"

const Routeur = () => {

    return (
        <Routes>
            {routes.map((e, i) => {
                return (
                    <Route key={i} path={e.path} element={<Middleware>{e.element}</Middleware>} />
                )
            })}
        </Routes>
    );
};

export default Routeur

