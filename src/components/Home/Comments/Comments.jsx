import CommentsWrapper from './CommentsWrapper';
import { Emoji } from 'react-apple-emojis';

const Comments = () => {
    return (
        <div className="d-flex flex-column gap-4 my-5 align-items-center justify-content-center mx-5">
            <p
                className="px-2 fw-bold text-center"
                style={{
                    color: '#4475F2',
                }}
            >
                TESTIMONIAL DESTINIZE
            </p>
            <h1
                style={{
                    color: '#14183E',
                    fontWeight: 'bold',
                }}
                className="fw-bold text-wrap text-center"
            >
                <Emoji name="speech-balloon" className="section-emoji" /> • Apa
                Kata Mereka Tentang Kami
            </h1>
            <p className="text-center text-wrap w-75">
                Penasaran apa saja review dari pengguna yang memakai aplikasi
                dan website Destinize buat nentuin kemana liburan mereka
                selanjutnya? Yuk cek dibawah!
            </p>
            <div className="mx-2">
                <CommentsWrapper />
            </div>
        </div>
    );
};

export default Comments;
