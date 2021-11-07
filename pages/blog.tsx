import Layout from '../Layout'
import Style from '../styles/Users.module.css'

// interface BlogProps { dataBlog: Array<any> }
interface BlogProps { dataBlog: Post[] }
interface Post { id: number; title: string; body: string }

export default function Blog(props: BlogProps) {
    const { dataBlog } = props
    return (
        <Layout title="Blog">
            <div className={Style.container}>
                {dataBlog.map(blog => (
                    <div key={blog.id} className={Style.card}>
                        <p>{blog.title}</p>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const dataBlog = await res.json()
    return {
        props: {
            dataBlog
        }
    }
}



