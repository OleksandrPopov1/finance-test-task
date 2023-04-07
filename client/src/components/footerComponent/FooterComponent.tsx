import {FC} from "react";

import './FooterComponent.css';

const FooterComponent: FC = () => {
    return (
        <div className={'footerComponent'}>
            <p>&copy; Ticker, 2023. All rights reserved.</p>
        </div>
    );
};

export {
    FooterComponent
};
