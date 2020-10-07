import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';

export default function UsersHome(ctx){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Users Home' headerSubText='Manage users'>
            <h1>Users Home</h1>
        </AdminLayoutPage>
    )
}