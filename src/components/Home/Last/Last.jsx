import LastImg from '../../../assets/last.png';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
const Last = () => {
    return (
        <div
            className="w-100 d-flex flex-row rounded-4 justify-content-between my-5"
            style={{
                backgroundColor: '#4372EB',
                height: '378px',
            }}
        >
            <div className="text text-white p-5 d-flex flex-column justify-content-around w-50 fw-bold">
                <h1>Masih bingung cari tempat yang cocok? 🤔</h1>
                <p className="text-white-50">
                    Tenang, kami mempunyai fitur rekomendasi yang membantu kamu
                    mencari tempat berlibur yang tepat dengan menjawab
                    pertanyaan yang kami berikan.
                </p>
                <p>
                    Mulai sekarang
                    <ArrowForwardRoundedIcon />
                </p>
            </div>
            <img src={LastImg} alt="" className="" />
        </div>
    );
};

export default Last;
