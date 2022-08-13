import { Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className='m-4'>
                <Typography variant="h1">404 | Page Not Found</Typography>
                <Typography variant="paragraph">Return <NavLink to="/" className='text-light-blue-700'>home</NavLink></Typography>
            </div>
        </>
    )
}

export default NotFound;