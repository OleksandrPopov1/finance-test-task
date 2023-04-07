import {FC, useEffect} from "react";

import {MainLayoutComponent} from "./layouts";
import {useAppDispatch} from "./hooks";
import {socketOff, socketOn} from "./helpers";

const App: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {

        socketOn(dispatch)

        return () => {
            socketOff(dispatch);
        };
    }, [dispatch]);

    return (
        <div>
            <MainLayoutComponent/>
        </div>
    );
};

export {
    App
};
