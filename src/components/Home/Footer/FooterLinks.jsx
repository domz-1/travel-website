const FooterLinks = () => {
    const links = [
        'Pekerjaan',
        'Karir',
        'Blog',
        'Tentang Kami',
        'somp',
        'Ekd',
        'Gsio',
    ];

    return (
        <div className="one d-flex flex-column">
            <p className="fw-bold text-black">Tentang</p>
            {links.map((link, index) => (
                <p key={index} className="gray-color">
                    {link}
                </p>
            ))}
        </div>
    );
};

export default FooterLinks;
