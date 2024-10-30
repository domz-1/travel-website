import { Emoji } from 'react-apple-emojis';
import Photo from '../../../assets/Image.png';
// import Photo2 from '../../../assets/absolute.png';
import Emotion from './Emotion';
import { useTheme, useMediaQuery } from '@mui/material';

const Reserv = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div
            className={`d-flex ${
                isMobile ? 'flex-column-reverse' : 'flex-row'
            } justify-content-around align-items-center reserv-section-wrapper`}
        >
            <div
                className={` d-flex flex-column justify-content-center revers ${
                    isMobile ? 'align-items-center' : ''
                }`}
            >
                <p
                    className="px-2 fw-bold"
                    style={{
                        color: '#4475F2',
                    }}
                >
                    RESERVASI TEMPAT
                </p>
                <h1
                    style={{
                        color: 'rgba(20, 24, 62, 1)',
                        fontWeight: 'bold',
                    }}
                    className="fw-bold text-wrap w-75"
                >
                    Gak mau ngantri? Reservasi aja!
                    <Emoji
                        name="call-me-hand-light-skin-tone"
                        className="section-emoji"
                    />
                </h1>
                <div
                    className="d-flex flex-column mt-5"
                    style={{
                        gap: '3rem',
                    }}
                >
                    <Emotion
                        emojiName="magnifying-glass-tilted-left"
                        description="Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize"
                        title="Cari tempat yang kamu mau"
                    />
                    <Emotion
                        emojiName="pencil"
                        description="Tulis dan lengkapi data kamu untuk keperluan data booking"
                        title="Isi data dan konfirmasi pembayaran"
                    />
                    <Emotion
                        emojiName="smiling-face-with-heart-eyes"
                        description="Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan"
                        title="Tinggal masuk dan enjoy!"
                    />
                </div>
            </div>
            <div>
                <img
                    src={Photo}
                    alt="photo-playback"
                    className="photo-playback"
                />
            </div>
        </div>
    );
};

export default Reserv;
