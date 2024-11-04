const Copyright = () => {
    return (
        <div className="down d-flex justify-content-between align-items-center">
            <p className="gray-color">
                &copy; 2023 Destinize. All rights reserved.
            </p>
            <div className="wrapper text-wrap social d-flex">
                {[
                    'Tentang Kami',
                    'Sitemap',
                    'Privasi & policy',
                    'Kontak',
                    'Panduan Pengunaan',
                ].map((item, index) => (
                    <p key={index} className="gray-color">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Copyright;
