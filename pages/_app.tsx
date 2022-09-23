import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container, CssBaseline } from '@mui/material'
import NavBar from '../components/NavBar'
import { ThemeProvider } from '@emotion/react'
import theme from '../theme'
import 'jetbrains-mono'

function MyApp({ Component, pageProps }: AppProps) {
  return (<ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />

    <NavBar />

    <Container sx={{ height: '100%' }} >
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>)
}

export default MyApp
