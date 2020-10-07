import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';

export default function RolesHome(ctx){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Roles Home' headerSubText='Manage roles'>
            <h1>Roles Home</h1>
        </AdminLayoutPage>
    )
    return (<h1>Roles Home</h1>)
}