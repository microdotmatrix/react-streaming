import '@styles/app.css'
import { Space_Grotesk } from '@next/font/google'

import Providers from './providers'
import { initializeStore } from '@context/store'

import Counter from '@components/counter'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export default function RootLayout({ children }, pageProps) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <header>
            <div className="container mx-auto flex flex-row justify-between">
              <div>
                <h2>Header</h2>
              </div>
              <div>
                <Counter />
              </div>
            </div>
          </header>
          <main className="container mx-auto flex-1">
            {children}
          </main>
          <footer>
            <div className="container mx-auto">
              <h2>Footer</h2>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}

export function getServerProps() {
  const zustandStore = initializeStore()
  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  }
}