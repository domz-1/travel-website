import LinkWithArrow from './LinkWithArrow';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { useTheme, useMediaQuery } from '@mui/material';

const NavDown = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div
            className="nav-down-wrapper pb-3 px-5"
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                borderTop: '1px solid rgba(223, 223, 224, 1)',
            }}
        >
            <div className="links">
                <LinkWithArrow title="Gunung" />
                <LinkWithArrow title="Pantai" />
                <LinkWithArrow title="Kuliner" />
                <LinkWithArrow title="Outbond" />
                <LinkWithArrow title="Sejarah" />
                <LinkWithArrow title="Edukasi" />
                <LinkWithArrow title="Romantis" />
                <LinkWithArrow title="Alam" />
            </div>
            <div className="btns">
                <ShoppingCartRoundedIcon className="shop" />
                <Person2RoundedIcon className="person" />
            </div>
        </div>
    );
};

export default NavDown;
