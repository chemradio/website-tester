import React, {useState} from "react";
import {useDispatch} from "react-redux";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {logOutRequest} from "../../../../store/actions/usersActions";
import {Link} from "react-router-dom";
import Avatar from "../../Avatar/Avatar";

const UserMenu = ({user}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <Link to="/new">
            <Fab color="secondary" aria-label="add" sx={{width: '40px', height: '15px'}}>
                <AddIcon />
            </Fab>
        </Link>
      <Button
        id="basic-button"
        color="inherit"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar user={user}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => dispatch(logOutRequest())}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
