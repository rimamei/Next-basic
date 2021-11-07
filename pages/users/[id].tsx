import { useRouter } from 'next/router'
import Layout from '../../Layout'

export default function UserDetail() {
    const router = useRouter()
    const { id } = router.query
    return (
        <Layout title="Users Detail">
            <div>
                <p>User Detail Page {id}</p>
            </div>
        </Layout>
    )
}

