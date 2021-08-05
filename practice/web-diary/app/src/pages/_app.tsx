import {IntlProvider} from "react-intl"
import {ThemeProvider} from "@ui/theme"

function MyApp({Component, pageProps}) {
  return (
    <IntlProvider locale={"en"}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default MyApp