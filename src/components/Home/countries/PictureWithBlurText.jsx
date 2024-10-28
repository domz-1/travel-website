const PictureWithBlurText = ({ src, title, desc }) => {
    return (
        <div className="country-card">
            <img src={src} alt={title} className="img" />
            <div className="sub-text">
                <p className="one">{title}</p>
                <p className="two">{desc}</p>
            </div>
        </div>
    );
};

export default PictureWithBlurText;
