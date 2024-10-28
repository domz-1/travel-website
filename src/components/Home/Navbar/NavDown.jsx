import LinkWithArrow from './LinkWithArrow';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

const NavDown = () => {
    return (
        <div
            className="nav-down-wrapper py-3"
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <div className="links">
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
                <LinkWithArrow title="lorem" />
            </div>
            <div className="btns">
                <ShoppingCartRoundedIcon className="shop" />
                <Person2RoundedIcon className="person" />
            </div>
        </div>
    );
};

export default NavDown;
