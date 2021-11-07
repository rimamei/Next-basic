import React from 'react'
import Link from 'next/link'
import Style from './Header.module.css'

const Header = () => {
    return (
        <header className={Style.header}>
            <ul className={Style.container}>
                <li className={Style.list}><Link href="/"><a>Home</a></Link></li>
                <li className={Style.list}><Link href="/blog"><a>Blog</a></Link></li>
                <li className={Style.list}><Link href="/users"><a>Users</a></Link></li>
            </ul>
        </header>
    )
}

export default Header
