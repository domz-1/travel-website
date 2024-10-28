import icon from '../../../assets/icon.png';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import { useTheme, useMediaQuery } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className="wrapper pt-5 my-5 ">
            <img src={icon} alt="" className="my-3" />
            <div
                className={`d-flex ${
                    isMobile ? 'flex-column' : 'flex-row'
                } justify-content-between gap-4`}
            >
                <div className="right d-flex flex-column gap-4 justify-content-between">
                    <p>Destinize</p>
                    <p>
                        Destinize adalah website atau layanan aplikasi yang
                        membantu kamu memilih atau merekomendasikan tempat yang
                        dijuluki ‘hidden gems’ agar lebih dikenal dan ramai Baca
                        Selengkapnya
                    </p>
                    <p>
                        <CallRoundedIcon />
                        0851-5616-2840
                    </p>
                    <p>
                        <EmailRoundedIcon />
                        syaokay@gmail.com
                    </p>
                    <p>
                        <LocationOnRoundedIcon />
                        Ciamis, Jawa Barat. Indonesia
                    </p>
                    <p>
                        <LocalPrintshopRoundedIcon />
                        +1-212-9876543
                    </p>
                </div>
                <div className="left d-flex flex-row gap-3 justify-content-between w-100">
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p>Pekerjaan</p>
                        <p>Karir</p>
                        <p>Blog</p>
                        <p>Tentang Kami</p>
                        <p>somp</p>
                        <p>Ekd</p>
                        <p>Gsio</p>
                    </div>
                    <div className="one d-flex flex-column gap-2 ">
                        <p className="fw-bold text-black">Tentang</p>
                        <p>Pekerjaan</p>
                        <p>Karir</p>
                        <p>Blog</p>
                        <p>Tentang Kami</p>
                        <p>somp</p>
                        <p>Ekd</p>
                        <p>Gsio</p>
                    </div>
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p>Pekerjaan</p>
                        <p>Karir</p>
                        <p>Blog</p>
                        <p>Tentang Kami</p>
                        <p>somp</p>
                        <p>Ekd</p>
                        <p>Gsio</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="down d-flex justify-content-between">
                <p className="">&copy; 2023 Destinize. All rights reserved.</p>
                <div className="social d-flex gap-4">
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
