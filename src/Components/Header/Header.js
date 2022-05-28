import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./header.css"

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <nav>
                <CustomLink to = "/home">Home</CustomLink>
                <CustomLink to="/orderriview">Order Riview</CustomLink>
                <CustomLink to="/grandpa">GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;