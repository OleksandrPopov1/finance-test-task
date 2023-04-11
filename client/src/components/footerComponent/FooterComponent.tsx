import {FC} from "react";

import './FooterComponent.css';

const FooterComponent: FC = () => {
    return (
        <div className={'footerComponent'}>
            <p>&copy; <span>Ticker, 2023. All rights reserved.</span></p>
        </div>
    );
};

export {
    FooterComponent
};
