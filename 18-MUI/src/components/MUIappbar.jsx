
import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Menu, MenuItem, Stack } from '@mui/material';

function MUIappbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6">
                        MUIappbar
                    </Typography>

                    <Stack
                        direction="row"
                        sx={{ marginLeft: 'auto' }}
                    >
                        <Button sx={{ color: "white" }}>
                            AnaSayfa
                        </Button>

                        <Button sx={{ color: "white" }}>
                            Hakkımızda
                        </Button>

                        <Button
                            sx={{ color: "white" }}
                            onClick={openMenu}
                        >
                            Ürünler
                        </Button>

                        <Button sx={{ color: "white" }}>
                            İletişim
                        </Button>
                    </Stack>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                    >
                        <MenuItem onClick={closeMenu}>
                            Lastik
                        </MenuItem>

                        <MenuItem onClick={closeMenu}>
                            Bijon
                        </MenuItem>

                        <MenuItem onClick={closeMenu}>
                            Body Kit
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <hr />
        </div>
    );
}

export default MUIappbar;
