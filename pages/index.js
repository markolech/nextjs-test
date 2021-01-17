import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import Character from '../components/CharacterContainer'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Breaking Bad Character Information</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Breaking Bad Characters</h1>

        <p className={styles.description}>Using Next.js </p>
        <p className={styles.description}>Warning: Spoiler Alert... </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <QueryClientProvider client={queryClient}>
              <Character></Character>
            </QueryClientProvider>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
