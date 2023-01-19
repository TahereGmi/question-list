import Head from 'next/head'
import styles from './layout.module.scss'

export default function Layout({
    children
  }: {
    children: React.ReactNode,
  }) {
    return (
    <>
        <Head>
            <title>next</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section>
            <header className="header">
                <div className="container">
                  <div className="flex w-full h-16">
                    <div className="flex-1 align-middle">
                     <h3 className={`font-extrabold text-2xl isGray ${styles.lineHeight68}`}>لیست سوالات</h3>
                    </div>
                    <button className={`h-8 radius-2.5 text-xs font-normal rounded-l rounded-r mt-4 ml-4 px-4 ${styles.bgGreen}`}>سوال جدید</button>
                    <div className="isGray font-normal mt-6 text-sm pl-4">طاهره غلامی</div>
                  </div>
                </div>
            </header>
            <main className={styles.main}>
              {children}
            </main>
        </section>
    </>
    );
  }