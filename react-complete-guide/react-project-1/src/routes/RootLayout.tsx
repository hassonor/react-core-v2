import {Outlet} from 'react-router-dom';
import MainHeader from "../components/MainHeader.tsx";

const RootLayout = () => {
    return <>
        <MainHeader/>
        <Outlet/>
    </>
}

export default RootLayout;