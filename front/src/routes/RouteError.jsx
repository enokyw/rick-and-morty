import { useRouteError } from "react-router-dom"

export const RouteError = () => {
    const error = useRouteError();
    return <>
        <div>Route Error</div>
        <p><i>{error.statusText || error.message}</i></p>
    </>
}