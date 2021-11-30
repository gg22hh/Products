import { AppProps } from 'next/dist/shared/lib/router/router';
import { FC } from "react";
import "../styles/app.scss";
import "swiper/components/pagination/pagination.scss";




const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
