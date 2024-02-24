"use client"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignUpMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleSignUp = async () => {
        await signIn();
    };
    const handleLogIn = async () => {
        await signIn();
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <button onClick={handleClick}>Sign up </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
                <MenuItem onClick={handleLogIn}>Log in</MenuItem>
            </Menu>
        </div>
    )
}

export default SignUpMenu;