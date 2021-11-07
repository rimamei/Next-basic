import { useRouter } from 'next/router'
import Layout from '../../Layout'

interface UserDetailProps {
    user: User;
}

export default function UserDetail(props: UserDetailProps) {
    const { user } = props
    return (
        <Layout title="Users Detail">
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
            </div>
        </Layout>
    )
}

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

//  Static generation -> Generate data secara static ketika proses next js di build
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`
        }
    }))
    return {
        paths,
        fallback: false
    }
}

interface GetStaticProps {
    params: {
        id: string
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const user = await res.json()
    return {
        props: {
            user
        }
    }
}

