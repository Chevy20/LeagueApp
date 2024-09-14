import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavButton = ({ label, targetPage }) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(targetPage)}>
            {label}
        </button>
    );
};

export default NavButton;
