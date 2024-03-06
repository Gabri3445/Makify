"use client"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



const ProfileMenu = (props : {username: string}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const router = useRouter()
    const handleProfile = () => {
        router.push(`/profile/${props.username}`)
    };
    const handleEditProfile = () => {
        router.push(`/profile`)
    }
    const handleLogOut = async () => {
        await signOut();
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <button onClick={handleClick}>{props.username}</button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
            </Menu>
        </div>
    )
}

export default ProfileMenu;