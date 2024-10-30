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
                    <p
                        className="gray-color
                    "
                    >
                        Destinize adalah website atau layanan aplikasi yang{' '}
                        <br />
                        membantu kamu memilih atau merekomendasikan tempat yang
                        dijuluki ‘hidden gems’ agar lebih dikenal dan ramai
                        &nbsp;
                        <span
                            style={{
                                fontWeight: 700,

                                color: 'rgb(68, 117, 242)',
                            }}
                        >
                            Baca Selengkapnya
                        </span>
                    </p>
                    <div className="d-flex flex-column gap-3">
                        <p
                            className="gray-color
                    "
                        >
                            <CallRoundedIcon sx={{ width: 20, height: 20 }} />{' '}
                            &nbsp; 0851-5616-2840
                        </p>
                        <p
                            className="gray-color
                    "
                        >
                            {' '}
                            <EmailRoundedIcon /> &nbsp; syaokay@gmail.com
                        </p>
                        <p
                            className="gray-color
                    "
                        >
                            {' '}
                            <LocationOnRoundedIcon /> &nbsp; Ciamis, Jawa Barat.
                            Indonesia
                        </p>
                        <p
                            className="gray-color
                    "
                        >
                            {' '}
                            <LocalPrintshopRoundedIcon /> &nbsp; +1-212-9876543
                        </p>
                    </div>
                </div>
                <div className="left d-flex flex-row justify-content-evenly w-100">
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p
                            className="gray-color
                        "
                        >
                            Pekerjaan
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Karir
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Blog
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Tentang Kami
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            somp
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Ekd
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Gsio
                        </p>
                    </div>
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p
                            className="gray-color
                        "
                        >
                            Pekerjaan
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Karir
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Blog
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Tentang Kami
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            somp
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Ekd
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Gsio
                        </p>
                    </div>
                    <div className="one d-flex flex-column gap-2">
                        <p className="fw-bold text-black">Tentang</p>
                        <p
                            className="gray-color
                        "
                        >
                            Pekerjaan
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Karir
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Blog
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Tentang Kami
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            somp
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Ekd
                        </p>
                        <p
                            className="gray-color
                        "
                        >
                            Gsio
                        </p>
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
                <p
                    className="gray-color
                "
                >
                    &copy; 2023 Destinize. All rights reserved.
                </p>
                <div
                    className={`wrapper text-wrap w-75  social d-flex gap-4 justify-content-end `}
                >
                    <p
                        className="gray-color
                    "
                    >
                        Facebook
                    </p>
                    <p
                        className="gray-color
                    "
                    >
                        Instagram
                    </p>
                    <p
                        className="gray-color
                    "
                    >
                        Twitter
                    </p>
                    <p
                        className="gray-color
                    "
                    >
                        LinkedIn
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
