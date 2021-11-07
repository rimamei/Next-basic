import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../Layout'
import Style from '../styles/Home.module.css'

const Custom404 = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [])

    return (
        <Layout title='Not Found'>
            <h1 className={Style['not-found-page']}>Halaman tidak ditemukan</h1>
        </Layout>
    )
}

export default Custom404
