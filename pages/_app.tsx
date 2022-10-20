import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container, CssBaseline } from '@mui/material'
import NavBar from '../components/NavBar'
import { ThemeProvider } from '@emotion/react'
import theme from '../theme'
import 'jetbrains-mono'
import { GCScript } from "next-goatcounter";

function MyApp({ Component, pageProps }: AppProps) {
  return (<ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />

    <NavBar />

    <Container sx={{ height: '100%' }} >
      <GCScript siteUrl={"https://0xa.goatcounter.com/count"} scriptSrc={"//gc.zgo.at/count.js"} />
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>)
}

export default MyApp
