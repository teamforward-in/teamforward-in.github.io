import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';

export default function HomePage(ctx){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Client Details' headerSubText='Manage Client'>
            <h1>{'Client ' + router.query.id }</h1>
        </AdminLayoutPage>
    )
}