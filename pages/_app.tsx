import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { store } from "src/store";

import "src/scss/styles.scss";
import "src/scss/_components.scss";
import "src/scss/_layouts.scss";
import "src/scss/_palettes.scss";
import "src/scss/react-circular-progressbar.scss";
import "src/scss/rc-slider.scss";
import "src/scss/react-datetime.scss";
import "src/scss/react-notifications.scss";
import "src/scss/nprogress.scss";
import "react-datepicker/dist/react-datepicker.css";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />;
		</Provider>
	);
};

export default MyApp;
