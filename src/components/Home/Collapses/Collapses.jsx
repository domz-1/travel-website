import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CollapsItems from './CollapsItems';
import { Emoji } from 'react-apple-emojis';
const Collapses = () => {
    return (
        <div className=" section-wrapper py-5">
            <p className="title">FREQUENTLY ASKED QUESTION</p>
            <div className="section-sub">
                <h1>
                    <Emoji name="thinking-face" className="section-emoji" />•
                    Pertanyaan yang Sering Diajukan
                </h1>
                <p className="title">
                    Lihat semua <ChevronRightRoundedIcon />
                </p>
            </div>
            <CollapsItems />
        </div>
    );
};

export default Collapses;
