import Photo from '../../../assets/Image.png';
import Emotion from './Emotion';
const Reserv = () => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center gap-3 w-100 h-auto">
            <div className="w-100">
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
                        color: '#14183E',
                        fontWeight: 'bold',
                    }}
                    className="fw-bold text-wrap w-75"
                >
                    Gak mau ngantri? reservasi aja! 🤙🏻
                </h1>
                <Emotion
                    emoji="🔍"
                    description="Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize"
                    title="Cari tempat yang kamu mau"
                />
                <Emotion
                    emoji="📕"
                    description="Tulis dan lengkapi data kamu untuk keperluan data booking"
                    title="Isi data dan konfirmasi pembayaran"
                />
                <Emotion
                    emoji="😍"
                    description="Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan"
                    title="Tinggal masuk dan enjoy!"
                />
            </div>
            <img src={Photo} alt="photo-playback" className="" />
        </div>
    );
};

export default Reserv;
