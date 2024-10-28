import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const LinkWithArrow = ({ title }) => {
    return (
        <div className="linkandarrow">
            <p>{title}</p>
            <KeyboardArrowDownOutlinedIcon />
        </div>
    );
};

export default LinkWithArrow;
