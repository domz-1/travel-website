import icon from '../../../assets/icon.png';
import { CiPhone } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { BsPrinter } from 'react-icons/bs';
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
            <div
                className={`d-flex ${
                    isMobile ? 'flex-column' : 'flex-row'
                } justify-content-between gap-4`}
            >
                <div className="right d-flex flex-column gap-3  justify-content-around ">
                    <img
                        src={icon}
                        alt=""
                        className=""
                        style={{ width: 32, height: 32 }}
                    />
                    <div className="gap-16">
                        <p
                            className="fw-bold text-black"
                            style={{ fontSize: '24px' }}
                        >
                            Destinize
                        </p>
                        <p
                            className="gray-color
                    "
                        >
                            Destinize adalah website atau layanan aplikasi yang
                            <br />
                            membantu kamu memilih atau merekomendasikan <br />
                            tempat yang dijuluki ‘hidden gems’ agar lebih
                            dikenal dan ramai &nbsp;
                            <span
                                style={{
                                    fontWeight: 700,

                                    color: 'rgb(68, 117, 242)',
                                }}
                            >
                                Baca Selengkapnya
                            </span>
                        </p>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        <p
                            className="gray-color
                    "
                        >
                            <CiPhone style={{ width: 20, height: 20 }} /> &nbsp;
                            0851-5616-2840
                        </p>
                        <p
                            className="gray-color
                    "
                        >
                            {' '}
                            <CiMail /> &nbsp; syaokay@gmail.com
                        </p>
                        <p
                            className="gray-color
                    "
                        >
                            {' '}
                            <SlLocationPin /> &nbsp; Ciamis, Jawa Barat.
                            Indonesia
                        </p>
                        <p
                            className="gray-color
                    "
                        >
                            {' '}
                            <BsPrinter /> &nbsp; +1-212-9876543
                        </p>
                    </div>
                </div>
                <div
                    className="left d-flex flex-row justify-content-evenly w-100 gap-5"
                    style={{ fontSize: 18 }}
                >
                    <div className="one d-flex flex-column ">
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
                    <div className="one d-flex flex-column ">
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
                    <div className="one d-flex flex-column ">
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
                <div className={`wrapper text-wrap social d-flex  `}>
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
                        Sitemap
                    </p>
                    <p
                        className="gray-color
                    "
                    >
                        Privasi & policy
                    </p>
                    <p
                        className="gray-color
                    "
                    >
                        Kontak
                    </p>
                    <p
                        className="gray-color
                    "
                    >
                        Panduan Pengunaan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
