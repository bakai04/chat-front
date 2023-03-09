import { AppProps } from "next/app";
import { compose } from "../shared/lib";
import { withTheme } from "./providers/with-theme";
import { withToast } from "./providers/with-toast";

const MyApp = (props: AppProps) => <props.Component {...props.pageProps} />;

export const Application = compose(withTheme, withToast)(MyApp);
