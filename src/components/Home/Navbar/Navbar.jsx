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
            }}
        >
            <ListItem>
                <div className="Search" sx={{ width: '100%' }}>
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="Search"
                        className="search-input"
                        style={{
                            width: '100%',
                            borderRadius: '5px',
                            padding: '10px',
                            border: '1px solid #E0E0E0',
                        }}
                    />
                </div>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <LanguageIcon />
                </ListItemIcon>
                <ListItemText
                    primary="Bahasa Indonesia"
                    secondary={<ArrowDropDownRoundedIcon />}
                />
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
                    className="appbar shadow-sm"
                    sx={{
                        boxShadow: 'none',
                    }}
                >
                    <Stack
                        className="up"
                        direction="row"
                        sx={{
                            boxShadow: 'none',
                            display: 'flex',
                            justifyContent: isMobile
                                ? 'space-between'
                                : 'space-around',
                            alignItems: 'center',
                            width: '100%',
                            height: '72px',
                            bgcolor: '#fff',
                            color: 'black',
                            padding: isMobile ? '0 16px' : '0',
                        }}
                    >
                        <div className="logo">
                            <img
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
                                    }}
                                >
                                    <LanguageIcon />
                                    <Typography variant="subtitle2">
                                        Bahasa Indonesia
                                    </Typography>
                                    <ArrowDropDownRoundedIcon />
                                </div>
                                <div className="location">
                                    <LocationOnIcon />
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
