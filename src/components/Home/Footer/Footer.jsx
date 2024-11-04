import icon from '../../../assets/icon.png';
import { useTheme, useMediaQuery } from '@mui/material';
import Copyright from './Copyright';
import CompanyInfo from './CompanyInfo';
import ContactInfo from './ContactInfo';
import FooterLinks from './FooterLinks';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div
            className={`wrapper text-wrap pt-5 my-5 mx-5 ${
                isMobile ? 'flex-column w-75 mx-5' : 'flex-row w-100'
            }`}
            style={{ fontWeight: 400 }}
        >
            <div
                className={`d-flex ${
                    isMobile ? 'flex-column' : 'flex-row'
                } justify-content-between gap-4`}
            >
                <div className="right d-flex flex-column gap-3 justify-content-around">
                    <CompanyInfo icon={icon} />
                    <ContactInfo />
                </div>
                <div className="left" style={{ fontSize: 18 }}>
                    <FooterLinks />
                    <FooterLinks />
                    <FooterLinks />
                </div>
            </div>
            <br />
            <Copyright />
        </div>
    );
};

export default Footer;
