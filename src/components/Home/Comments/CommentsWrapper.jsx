import React from 'react';
import CardComment from './CardComment';
import User1 from '../../../assets/use1.png';
import User2 from '../../../assets/user2.png';
import User3 from '../../../assets/user3.png';

const CommentsWrapper = () => {
    return (
        <div className="d-flex flex-row w-100 justify-content-between">
            <CardComment
                img={User1}
                username="Sandhika Galih"
                comment="Destinize membantu saya
                Mencari spot tempat wisata baru
                di Indonesia dengan Mudah"
                subtext="Dosen di WPU"
            />
            <CardComment
                img={User2}
                username="Sandhika Galih"
                comment="Destinize membantu saya
                Mencari spot tempat wisata baru
                di Indonesia dengan Mudah"
                subtext="Warga di Bikini Bottom"
            />
            <CardComment
                img={User3}
                username="Galih Sandhika"
                comment="Destinize membantu saya
                Mencari spot tempat wisata baru
                di Indonesia dengan Mudah"
                subtext="Mahasiswa di WPU"
            />
        </div>
    );
};

export default CommentsWrapper;