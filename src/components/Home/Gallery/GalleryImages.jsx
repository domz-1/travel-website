import Media from '../../../assets/media.png';
import Media1 from '../../../assets/media1.png';
import Media2 from '../../../assets/media2.jpg';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useTheme, useMediaQuery } from '@mui/material';

const GalleryImages = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <div
                className={`d-flex ${
                    isMobile ? 'flex-column' : 'flex-row'
                } w-100 justify-content-between mb-3 gap-5 `}
            >
                <div
                    className={`card shadow-lg `}
                    style={{
                        width: isMobile ? '100%' : '35%',
                    }}
                >
                    <img src={Media} className="card-img-top" alt="image" />
                    <div className="card-body px-3 pt-3 ">
                        <p className="fw-bold" style={{ color: '#BDBDBD' }}>
                            26 DESEMBER 2021
                        </p>
                        <p className="fw-bold 1875rem py-2">
                            Tips naik gunung Bromo Biar gak capek cyin 😥😛
                        </p>
                        <p className="fw-bold text-black-50 card-text py-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-body px-3 pb-3">
                        <a
                            href="#"
                            className="card-link text-blue text-decoration-none"
                        >
                            Another link
                        </a>
                    </div>
                </div>
                <div className="pic position-relative w-100">
                    <img
                        src={Media1}
                        alt="media2"
                        className="shadow-lg"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            backgroundColor: '#f9f9f9',
                            transition: 'background-color 0.3s ease',
                        }}
                    />
                    <div
                        className="playback position-absolute"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#23A6F0',
                            color: 'white',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <PlayArrowRoundedIcon />
                    </div>
                </div>
            </div>
            {isMobile || (
                <div className="media-2 position-relative w-100">
                    <img
                        src={Media2}
                        alt="picture"
                        className="w-100 h-100 shadow-lg rounded-4"
                    />

                    <div
                        className="text position-absolute ps-5 d-flex flex-column w-100 h-100 justify-content-end p-5"
                        style={{
                            bottom: '0',
                            right: '0',
                            color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            padding: '10px',
                            borderRadius: '5px',
                            display: 'flex',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            zIndex: '2',
                        }}
                    >
                        <p
                            className="fw-bold"
                            style={{
                                fontSize: '24px',
                            }}
                        >
                            Tips meminum air kawah biar lidah melepuh 😁
                        </p>
                        <p
                            className=""
                            style={{
                                fontSize: '16px',
                            }}
                        >
                            Lidah melepuh? why nott, kawah bukan untuk dilihat
                            kawan.. tapi untuk di minum.. rasakan kepanasan yang
                            brutal 🔥
                        </p>
                        <div className="d-flex flex-row gap-5 mt-3">
                            <p>Baru</p>
                            <p>Trending</p>
                            <p>Google</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryImages;
