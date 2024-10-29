import { Button, Chip } from '@mui/material';
import { Typography } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useTheme, useMediaQuery } from '@mui/material';
import { Emoji } from 'react-apple-emojis';

const LandingPageText = () => {
    const theme = useTheme();
    const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div
            className="d-flex flex-column  flex-shrink-1"
            style={{
                textWrap: 'wrap',
                margin: '0',
                // maxWidth: '500px',
                padding: '20px',
                textAlign: isMobile ? 'center' : 'start',
                justifyContent: 'center',
                alignItems: isMobile ? 'center' : 'start',
            }}
        >
            <Chip
                label={`🛫• Explore the wonderful indonesia!`}
                className={`chip1 fw-bold ${isMobile ? 'w-75' : 'w-50'}`}
                variant="filled"
                size="medium"
                style={{
                    backgroundColor: '#E5EDFF',
                    color: '#4F7DF3',
                }}
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
                <br />
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
                indonesia{' '}
                <Emoji
                    name="desert-island"
                    style={{
                        width: isMobile ? '2rem' : '89px',
                    }}
                />
            </Typography>
            <Typography
                sx={{
                    color: '#5E6282',
                    fontSize: '1rem',
                    fontWeight: '500',
                }}
                className="w-50 text-wrap my-2"
            >
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media{' '}
                <Emoji
                    name="sparkles"
                    style={{
                        width: '1rem',
                    }}
                />
            </Typography>
            <div
                className={`${
                    isMobile ? 'd-flex flex-column-reverse' : 'd-flex flex-row'
                } landing-btns`}
            >
                <Button
                    sx={{
                        bgcolor: '#4475F2',
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        borderRadius: '10px',
                        width: '200',
                        height: '60px',
                        fontSize: '1rem',
                    }}
                >
                    Mulai sekarang →
                </Button>
                <div
                    className="
                d-flex align-items-center
                gap-2"
                    style={{
                        fontSize: '1rem',
                    }}
                >
                    <PlayArrowRoundedIcon
                        sx={{
                            color: '#4475F2',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            outline: '1px solid #4475F2',
                            boxShadow: '1px 1px 10px 1px #4475F2',
                        }}
                    />
                    <p className="fw-bold">Putar Demo </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPageText;
