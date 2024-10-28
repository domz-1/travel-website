import CommentsWrapper from './CommentsWrapper';

const Comments = () => {
    return (
        <div className="d-flex flex-column gap-4 my-5 align-items-center justify-content-center">
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
                💬 • Apa Kata Mereka Tentang Kami
            </h1>
            <p className="text-center text-wrap w-75">
                Penasaran apa saja review dari pengguna yang memakai aplikasi
                dan website Destinize buat nentuin kemana liburan mereka
                selanjutnya? Yuk cek dibawah!
            </p>
            <CommentsWrapper />
        </div>
    );
};

export default Comments;
