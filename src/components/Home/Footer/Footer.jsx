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
        <div
            className={`wrapper text-wrap  pt-5 my-5 mx-5   ${
                isMobile ? 'flex-column w-75 mx-5' : 'flex-row w-100'
            }`}
            style={{
                fontWeight: 400,
            }}
        >
            <img src={icon} alt="" className="my-3" />
            <div
                className={`d-flex ${
                    isMobile ? 'flex-column' : 'flex-row'
                } justify-content-between gap-4`}
            >
                <div className="right d-flex flex-column gap-4 justify-content-between">
                    <p className="fw-bold text-black">Destinize</p>
                    <p className="text-black-50">
                        Destinize adalah website atau layanan aplikasi yang{' '}
                        <br />
                        membantu kamu memilih atau merekomendasikan tempat yang
                        dijuluki ‘hidden gems’ agar lebih dikenal dan ramai
                        <span
                            style={{
                                color: 'rgb(68, 117, 242)',
                            }}
                        >
                            Baca Selengkapnya
                        </span>
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
                <div className="left d-flex flex-row justify-content-evenly w-100">
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
            <div
                className={`down d-flex justify-content-between align-items-center ${
                    isMobile ? 'flex-wrap' : 'flex-row'
                }`}
                style={{
                    width: '1224px',
                }}
            >
                <p className="text-black-50">
                    &copy; 2023 Destinize. All rights reserved.
                </p>
                <div
                    className={`wrapper text-wrap w-75  social d-flex gap-4 justify-content-end `}
                >
                    <p className="text-black-50">Facebook</p>
                    <p className="text-black-50">Instagram</p>
                    <p className="text-black-50">Twitter</p>
                    <p className="text-black-50">LinkedIn</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
