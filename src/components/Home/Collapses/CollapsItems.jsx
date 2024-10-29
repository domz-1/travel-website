import CollapseItem from './CollapseItem';

const CollapsItems = () => {
    return (
        <div
            className="fw-bold"
            style={{
                boxShadow: '0px 2.77px 2.21px 0px rgba(191, 191, 191, 0.02);',
                boxShadow: '0px 6.65px 5.32px 0px rgba(191, 191, 191, 0.03)',

                // box-shadow: 0px 12.52px 10.02px 0px rgba(191, 191, 191, 0.04);

                // box-shadow: 0px 22.34px 17.87px 0px rgba(191, 191, 191, 0.04);

                // box-shadow: 0px 41.78px 33.42px 0px rgba(191, 191, 191, 0.05);

                // box-shadow: 0px 100px 80px 0px rgba(191, 191, 191, 0.07);
            }}
        >
            <CollapseItem
                title={`Kenapa ya pembayaranku gagal banh? 😁`}
                content="This is the detailed content for the accordion."
                isOpened={false}
            />
            <CollapseItem
                title={`Apakah rehan wangsaff adalah CEO dari Destinize?😅😅😅`}
                content="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s"
                isOpened={false}
            />
            <CollapseItem
                title={`Kenapa harus memilih Destinize?`}
                content="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, wh"
                isOpened={true}
            />
            <CollapseItem
                title={`Afa iyah bang? Gapeduli 👆🏻😅`}
                content="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s"
                isOpened={false}
            />
            <CollapseItem
                title={`Apa rekomendasi tempat buat orang yang jomblo? 😥`}
                content="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s"
                isOpened={false}
            />
        </div>
    );
};

export default CollapsItems;
