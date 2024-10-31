import {
    AppBar,
    Container,
    Stack,
    Typography,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { TfiWorld } from 'react-icons/tfi';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import NavDown from './NavDown';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const DrawerContent = () => (
        <List
            sx={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '20px',
                gap: '20px',
            }}
            className="d-flex flex-column justify-content-center align-items-center"
        >
            <ListItem>
                <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search"
                    className="drawer-search"
                    style={{
                        width: '100%',
                        borderRadius: '5px',
                        padding: '10px',
                        border: '1px solid #E0E0E0',
                        paddingLeft: '10px',
                        outline: 'none',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <TfiWorld />
                </ListItemIcon>
                <div className="d-flex flex-row gap2">
                    <p>Bahasa Indonesia</p>
                    <p></p>
                    <ArrowDropDownRoundedIcon />
                </div>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <HiOutlineLocationMarker />
                </ListItemIcon>
                <ListItemText
                    primary="Lokasi"
                    secondary={
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <span>Indonesia, Yogyakarta</span>
                            <ArrowDropDownRoundedIcon />
                        </Stack>
                    }
                />
            </ListItem>
            <NavDown />
        </List>
    );

    return (
        <>
            <Container className="container">
                <AppBar
                    className="appbar "
                    sx={{
                        boxShadow: 'none',
                    }}
                >
                    <Stack
                        className="up px-5"
                        direction="row"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '72px',
                            bgcolor: '#fff',
                            color: 'black',
                            padding: isMobile ? '0 16px' : '0',
                            gap: '65px',
                        }}
                    >
                        <div className="logo">
                            <img
                                className={`${isMobile ? 'ms-2' : ''}`}
                                src={Logo}
                                alt="Destinize"
                                width="119px"
                                height="29px"
                            />
                        </div>

                        {!isMobile && (
                            <>
                                <div className="Search position-relative">
                                    <input
                                        type="search"
                                        name=""
                                        id=""
                                        placeholder="Cari apapun disini..."
                                        className="search-input"
                                    />
                                    <CiSearch className="search-icon position-absolute" />
                                </div>
                                <div
                                    className="lang"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        width: '170px',
                                    }}
                                >
                                    <TfiWorld
                                        sx={{
                                            width: 20,
                                            height: 20,
                                        }}
                                    />
                                    <Typography variant="subtitle2">
                                        &nbsp; Bahasa Indonesia
                                    </Typography>
                                    <ArrowDropDownRoundedIcon />
                                </div>
                                <div className="location">
                                    <HiOutlineLocationMarker
                                        className="location-icon d-flex text-center"
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                        }}
                                    />
                                    <div className="sub-text">
                                        <Typography variant="subtitle2">
                                            Lokasi
                                        </Typography>
                                        <Stack className="flex-row">
                                            <span
                                                style={{
                                                    fontSize: '16px',
                                                }}
                                            >
                                                Indonesia, Yogyakarta
                                            </span>
                                            <ArrowDropDownRoundedIcon />
                                        </Stack>
                                    </div>
                                </div>
                            </>
                        )}

                        {isMobile && (
                            <IconButton
                                className={`${isMobile ? 'me-2' : ''}`}
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Stack>
                    {!isMobile && <NavDown />}
                </AppBar>
            </Container>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <DrawerContent />
            </Drawer>
        </>
    );
};

export default Navbar;
