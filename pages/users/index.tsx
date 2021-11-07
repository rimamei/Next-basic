import { useRouter } from 'next/router'
import Layout from '../../Layout'
import Style from '../../styles/Users.module.css'

interface UserProps {
    dataUsers: Array<any>
}

export default function Users(props: UserProps) {
    const router = useRouter()
    const { dataUsers } = props
    return (
        <Layout title='Users'>
            <div className={Style.container}>
                {dataUsers.map((user) => (
                    <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={Style.card}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

//  Static generation -> Generate data secara static ketika proses next js di build
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    return {
        props: {
            dataUsers
        }
    }
}
