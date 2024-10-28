import { Button, Chip } from '@mui/material';
import { Typography } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
const LandingPageText = () => {
    return (
        <div className="d-flex flex-column">
            <Chip
                label="🛩 • Explore the wonderful indonesia!"
                className="chip w-25"
                variant="filled"
                size="medium"
            />
            <Typography
                variant="h2"
                sx={{
                    color: '#181E4B',
                    fontWeight: 'bold',
                    fontSize: '76px',
                }}
            >
                Liburan & nikmati
                <span
                    style={{
                        color: '#367cf5',
                        fontWeight: 'bold',
                        fontSize: '76px',
                    }}
                >
                    tempat baru
                </span>
                di
                <br />
                indonesia 🌱
            </Typography>
            <Typography
                sx={{
                    color: '#5E6282',
                    fontSize: '1rem',
                    fontWeight: '500',
                }}
                className="w-75 text-wrap my-2"
            >
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media ✨
            </Typography>
            <div className="landing-btns">
                <Button
                    sx={{
                        bgcolor: '#4475F2',
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        borderRadius: '10px',
                    }}
                >
                    Mulai sekarang →
                </Button>
                <div
                    className="
                d-flex align-items-center
                gap-2"
                >
                    <PlayArrowRoundedIcon
                        sx={{
                            color: '#4475F2',
                            borderRadius: '50%',
                            outline: '1px solid #4475F2',
                            padding: '5px',
                            boxShadow: '1px 1px 10px 1px #4475F2',
                        }}
                    />
                    lorem
                </div>
            </div>
        </div>
    );
};

export default LandingPageText;
