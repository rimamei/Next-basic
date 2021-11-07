import Layout from '../../Layout'

interface UserProps { 
    dataUsers: Array<any> 
}

export default function Users(props: UserProps) {
    const { dataUsers } = props
    return (
        <Layout title='Users'>
            {dataUsers.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </Layout>
    )
}


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json()
    return {
        props: {
            dataUsers
        }
    }
}
