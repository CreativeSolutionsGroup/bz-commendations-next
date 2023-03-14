import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import { SessionProvider } from 'next-auth/react'
import { EmotionCache } from '@emotion/react';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';

function createEmotionCache() {
    return createCache({ key: 'css', prepend: true });
}

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {

  return (
    <CacheProvider value={emotionCache}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </CacheProvider>
  )
}
