import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header_section from "@/components/header_section";
import {GetServerSideProps, GetStaticProps} from "next";
import client from "@/contentful";
import Logo_section from "@/components/logo_section";
import Kunden_section from "@/components/Kunden_section";
import Support_section from "@/components/support_section";
import {
    IHeaderSektion,
    IHeaderSektionFields, IKundenVideoSektion,
    IKundenVideoSektionFields, ILogoSection,
    ILogoSectionFields, ISupportSection,
    ISupportSectionFields
} from "../../@types/generated/contentful";

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps: GetServerSideProps = async () => {
    const header = await client.getEntries<IHeaderSektionFields>({
        content_type: 'headerSektion',
        limit: 1
    })
    const [header_section] = header.items

    const logo = await client.getEntries<ILogoSectionFields>({
        content_type: 'logoSection',
        limit: 1
    })
    const [logo_section] = logo.items

    const kunden = await client.getEntries<IKundenVideoSektionFields>({
        content_type: 'kundenVideoSektion',
        limit: 1
    })
    const [video_section] = kunden.items

    const support = await client.getEntries<ISupportSectionFields>({
        content_type: 'supportSection',
        limit: 1
    })
    const [support_section] = support.items

    return {
        props: {
            header: header_section,
            logo: logo_section,
            kunden: video_section,
            support: support_section
        }
    }
}

const Home = ({header, logo, kunden, support}:
                  {header: IHeaderSektion, logo: ILogoSection, kunden: IKundenVideoSektion, support: ISupportSection}) => {
  return (
    <>
      <Head>
        <title>Test ContentFull + Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header_section header={header} />
          <Logo_section logo={logo} />
          <Kunden_section kunden={kunden} />
          <Support_section support={support} />
      </main>
    </>
  )
}

export default Home