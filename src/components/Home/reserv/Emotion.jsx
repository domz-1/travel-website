import { useTheme, useMediaQuery } from '@mui/material';
import { Emoji } from 'react-apple-emojis';

const Emotion = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div
            className={`d-flex flex-row 
                align-items-center`}
            style={{
                gap: 22.5,
            }}
        >
            <div className="emoji-box">
                <Emoji
                    name={props.emojiName}
                    style={{
                        width: '24px',
                        alignItems: 'center',
                        marginLeft: isMobile ? '30px' : '0',
                    }}
                />
            </div>

            <div className="d-flex flex-column w-75">
                <p style={{ color: 'rgba(94, 98, 130, 1)', fontWeight: 700 }}>
                    {props.title}
                </p>
                <p
                    className="text-wrap w-75"
                    style={{ color: 'rgba(94, 98, 130, 1)', fontWeight: 400 }}
                >
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default Emotion;
