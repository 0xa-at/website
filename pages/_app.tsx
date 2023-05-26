import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, Container, CssBaseline } from '@mui/material'
import NavBar from '../components/NavBar'
import { ThemeProvider } from '@emotion/react'
import theme from '../theme'
import 'jetbrains-mono'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import { GCScript } from 'next-goatcounter';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (<ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />

    <Box sx={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh'
    }}>

      {router.query.hideNav === undefined && <NavBar />}

      <Container sx={{ flexGrow: 5 }}>
        <GCScript siteUrl={"https://0xa.goatcounter.com/count"} />

        <Component {...pageProps} />
      </Container>

      <Box pt={3}>
        <Footer />
      </Box>
    </Box>

  </ThemeProvider>)
}

export default MyApp
