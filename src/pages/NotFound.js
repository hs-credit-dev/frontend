import { Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Typography variant="h1">404 | Page Not Found</Typography>
            <Typography variant="paragraph">Return <NavLink to="/">home</NavLink></Typography>
        </>
    )
}

export default NotFound;