import { Button, Chip } from '@mui/material';
import { Typography } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useTheme, useMediaQuery } from '@mui/material';
const LandingPageText = () => {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div
            className="d-flex flex-column w-auto flex-shrink-1"
            style={{
                textWrap: 'wrap',
                margin: '0 auto',
                maxWidth: '500px',
                padding: '20px',
                textAlign: isMobile ? 'center' : 'start',
                justifyContent: 'center',
                alignItems: isMobile ? 'center' : 'start',
            }}
        >
            <Chip
                label="🛩 • Explore the wonderful indonesia!"
                className={`chip1 ${isMobile ? 'w-75' : 'w-50'}`}
                variant="filled"
                size="medium"
            />
            <Typography
                variant="h2"
                sx={{
                    color: '#181E4B',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '2rem' : '76px',
                    textWrap: isMobile && 'wrap',
                }}
            >
                Liburan & nikmati
                <span
                    style={{
                        color: '#367cf5',
                        fontWeight: 'bold',
                        fontSize: isMobile ? '2rem' : '76px',
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
