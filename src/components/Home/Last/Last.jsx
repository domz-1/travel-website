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
            className={`w-100 d-flex ${
                isMobile ? 'flex-column-reverse' : 'flex-row'
            } rounded-4 justify-content-between my-5`}
            style={{
                backgroundColor: '#4372EB',
                height: isMobile ? 'auto' : '378px',
            }}
        >
            <div
                className={`text text-white p-5 d-flex flex-column justify-content-around ${
                    isMobile ? 'w-100' : 'w-50'
                } fw-bold`}
            >
                <h1>
                    Masih bingung cari tempat yang cocok?{' '}
                    <Emoji name="thinking-face" className="section-emoji" />
                </h1>
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
            {isMobile ? null : <img src={LastImg} alt="" className="" />}
        </div>
    );
};

export default Last;
