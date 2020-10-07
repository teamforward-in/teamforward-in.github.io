import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';
export default function ClientsDashboard(ctx){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Clients Dashboard' headerSubText='Client details peek'>
            <h1>Clients Dashboard</h1>
        </AdminLayoutPage>
    )
}