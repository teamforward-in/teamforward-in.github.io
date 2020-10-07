import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';

export default function CustomersDashboard(ctx){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Customers Dashboard' headerSubText='Customer details peek'>
            <h1>Customers Dashboard</h1>
        </AdminLayoutPage>
    )
}