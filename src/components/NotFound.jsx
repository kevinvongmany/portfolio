import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-9xl m-0">404</h1>
            <p className="text-2xl my-2">Page Not Found</p>
            <Link to="/" className="text-xl text-blue-500 no-underline">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;