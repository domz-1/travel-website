import LastImg from '../../../assets/last.png';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useTheme, useMediaQuery } from '@mui/material';
import { Emoji } from 'react-apple-emojis';
const Last = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div
            className={` d-flex mx-5  ${
                isMobile ? 'flex-column-reverse w-75' : ' flex-row'
            } rounded-4 justify-content-between qfa`}
            style={{
                backgroundColor: '#4372EB',
                height: isMobile ? 'auto' : '378px',
                width: '1224px',
            }}
        >
            <div
                className={`text text-white p-5 d-flex flex-column ${
                    isMobile ? 'w-100' : 'w-50'
                } fw-bold`}
                style={{
                    gap: 32,
                    color: 'rgba(255, 255, 255, 1)',
                }}
            >
                <h1 className="fw-bold">
                    Masih bingung cari tempat yang cocok?{' '}
                    <Emoji name="thinking-face" className="section-emoji" />
                </h1>
                <p
                    style={{
                        color: 'rgba(241, 242, 246, 1)',
                        fontWeight: 400,
                        fontSize: 18,
                    }}
                >
                    Tenang, kami mempunyai fitur rekomendasi yang membantu kamu
                    mencari tempat berlibur yang tepat dengan menjawab
                    pertanyaan yang kami berikan.
                </p>
                <p>
                    Mulai sekarang
                    <ArrowForwardRoundedIcon />
                </p>
            </div>
            {isMobile ? null : <img src={LastImg} alt="" className="" />}
        </div>
    );
};

export default Last;
