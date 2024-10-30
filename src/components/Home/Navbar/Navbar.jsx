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
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import NavDown from './NavDown';

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
                    <LanguageIcon />
                </ListItemIcon>
                <div className="d-flex flex-row gap2">
                    <p>Bahasa Indonesia</p>
                    <p></p>
                    <ArrowDropDownRoundedIcon />
                </div>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <LocationOnIcon />
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
                            gap: '40px',
                        }}
                    >
                        <div className="logo">
                            <img
                                className={`${isMobile ? 'ms-2' : 'ms-5'}`}
                                src={Logo}
                                alt="Destinize"
                                width="119px"
                                height="29px"
                            />
                        </div>

                        {!isMobile && (
                            <>
                                <div className="Search">
                                    <input
                                        type="search"
                                        name=""
                                        id=""
                                        placeholder="Search"
                                        className="search-input"
                                    />
                                </div>
                                <div
                                    className="lang"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        width: '240px',
                                    }}
                                >
                                    <LanguageIcon
                                        sx={{
                                            width: 20,
                                            height: 20,
                                        }}
                                    />
                                    <Typography variant="subtitle2">
                                        Bahasa Indonesia
                                    </Typography>
                                    <ArrowDropDownRoundedIcon />
                                </div>
                                <div className="location">
                                    <LocationOnIcon
                                        className="location-icon d-flex text-center"
                                        sx={{
                                            width: '48px',
                                            height: '48px',
                                        }}
                                    />
                                    <div className="sub-text">
                                        <Typography variant="subtitle2">
                                            Lokasi
                                        </Typography>
                                        <Stack className="flex-row">
                                            <span>Indonesia, Yogyakarta</span>
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
