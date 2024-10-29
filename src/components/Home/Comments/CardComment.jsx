import { Rating } from '@mui/material';
import { useState } from 'react';
const CardComment = (props) => {
    const [rate, setRate] = useState(2);
    return (
        <div
            className="comment-card d-flex flex-column justify-content-evenly align-items-center shadow-lg rounded-3 p-3"
            style={{
                flexShrink: '1',
                width: '400px',
                minHeight: '450px',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
            }}
        >
            <img
                src={props.img}
                alt={props.username}
                style={{
                    borderRadius: '50%',
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                }}
            />
            <p className="px-3 text-center">{props.comment}</p>
            <Rating
                name="simple-controlled"
                value={rate}
                onChange={(event, newValue) => {
                    setRate(newValue);
                }}
            />
            <p
                style={{
                    fontSize: '14px',
                    color: '#23A6F0',
                }}
            >
                {props.username}
            </p>
            <p>{props.subtext}</p>
        </div>
    );
};

export default CardComment;
