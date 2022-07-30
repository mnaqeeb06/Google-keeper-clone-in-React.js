import React from "react";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <header>
      <h1> <DriveFileRenameOutlineIcon /> Keeper</h1>

      {/* search */}
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          inputProps={{ 'aria-label': 'search' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* search */}
    </header>
  );
}

export default Header;
