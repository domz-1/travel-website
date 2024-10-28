import { useTheme, useMediaQuery } from '@mui/material';

const Emotion = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div
            className={`d-flex flex-row 
                ${isMobile ? 'w-100' : 'w-75'} align-items-center my-5`}
        >
            <p
                className="rounded-3 shadow-sm"
                style={{
                    backgroundColor: '#EFE0B4',
                    width: '90px',
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '24px',
                    marginLeft: isMobile ? '30px' : '0',
                }}
            >
                {props.emoji}
            </p>
            <div className="d-flex flex-column">
                <p className="px-3 fw-bold">{props.title}</p>
                <p className="px-3 text-wrap">{props.description}</p>
            </div>
        </div>
    );
};

export default Emotion;
