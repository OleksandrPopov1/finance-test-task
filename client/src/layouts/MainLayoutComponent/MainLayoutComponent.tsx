import {FC} from "react";

import {FooterComponent, HeaderComponent, TickersComponent} from "../../components";

const MainLayoutComponent: FC = () => {
    return (
        <div>
            <HeaderComponent/>

            <TickersComponent/>

            <FooterComponent/>
        </div>
    );
};

export {
    MainLayoutComponent
};
