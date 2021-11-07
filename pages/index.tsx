import type { NextPage } from 'next'
import Layout from '../Layout'
import style from '../styles/Home.module.css'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home Page">
        <Image src='/image/rima.jpg' width={200} height={200} alt='profile' />

        <h1 className={style['title-page']}>Welcome Rima</h1>
        {Array(10).fill('').map((_, i) => (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit obcaecati esse, aliquid iure labore! Architecto necessitatibus vel, error doloremque quisquam molestias magni inventore ducimus, ea repudiandae quis nam recusandae?</p>
        ))}
        <img src='/image/rima.jpg' style={{ height: 200, width: 200 }} alt='post image' />
        {Array(10).fill('').map((_, i) => (
          <p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit obcaecati esse, aliquid iure labore! Architecto necessitatibus vel, error doloremque quisquam molestias magni inventore ducimus, ea repudiandae quis nam recusandae?</p>
        ))}
        <Image src='/image/rima.jpg' width={200} height={200} alt='profile' />
      </Layout>
    </>
  )
}

export default Home
