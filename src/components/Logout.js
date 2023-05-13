import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Logout = () => {
    localStorage.clear()
    return <Redirect to="/login" />
};

export default Logout;