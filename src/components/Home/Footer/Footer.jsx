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
                    <p className="fw-bold text-black">Destinize</p>
                    <p className="text-black-50">
                        Destinize adalah website atau layanan aplikasi yang
                        membantu kamu memilih atau merekomendasikan tempat yang
                        dijuluki ‘hidden gems’ agar lebih dikenal dan ramai Baca
                        Selengkapnya
                    </p>
                    <p className="text-black-50">
                        {' '}
                        <CallRoundedIcon />
                        0851-5616-2840
                    </p>
                    <p className="text-black-50">
                        {' '}
                        <EmailRoundedIcon />
                        syaokay@gmail.com
                    </p>
                    <p className="text-black-50">
                        {' '}
                        <LocationOnRoundedIcon />
                        Ciamis, Jawa Barat. Indonesia
                    </p>
                    <p className="text-black-50">
                        {' '}
                        <LocalPrintshopRoundedIcon />
                        +1-212-9876543
                    </p>
                </div>
                <div className="left d-flex flex-row gap-3 justify-content-between w-100">
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p className="text-black-50">Pekerjaan</p>
                        <p className="text-black-50">Karir</p>
                        <p className="text-black-50">Blog</p>
                        <p className="text-black-50">Tentang Kami</p>
                        <p className="text-black-50">somp</p>
                        <p className="text-black-50">Ekd</p>
                        <p className="text-black-50">Gsio</p>
                    </div>
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p className="text-black-50">Pekerjaan</p>
                        <p className="text-black-50">Karir</p>
                        <p className="text-black-50">Blog</p>
                        <p className="text-black-50">Tentang Kami</p>
                        <p className="text-black-50">somp</p>
                        <p className="text-black-50">Ekd</p>
                        <p className="text-black-50">Gsio</p>
                    </div>
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p className="text-black-50">Pekerjaan</p>
                        <p className="text-black-50">Karir</p>
                        <p className="text-black-50">Blog</p>
                        <p className="text-black-50">Tentang Kami</p>
                        <p className="text-black-50">somp</p>
                        <p className="text-black-50">Ekd</p>
                        <p className="text-black-50">Gsio</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="down d-flex justify-content-between">
                <p className="text-black-50 fw-bold">
                    &copy; 2023 Destinize. All rights reserved.
                </p>
                <div className="social d-flex gap-4">
                    <p className="text-black-50 fw-bold">Facebook</p>
                    <p className="text-black-50 fw-bold">Instagram</p>
                    <p className="text-black-50 fw-bold">Twitter</p>
                    <p className="text-black-50 fw-bold">LinkedIn</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
