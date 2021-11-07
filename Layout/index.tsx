import React, { ReactNode } from 'react'
import { Header, Footer } from '../components'
import Style from './Layout.module.css'
import Head from 'next/head'

// Type props
interface LayoutProps {
    children: ReactNode // Kalo children typenya ReactNode
    title: string 
}

const Layout = (props: LayoutProps) => {
    const { children, title } = props
    return (
        <>
            <Head>
                <title>Next Basic Learning | {title}</title>
                <meta name="description" content='Website Basic Learning' />
            </Head>
            <div className={Style.layout}>
                <Header />
                <div className={Style.container}>{children}</div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
