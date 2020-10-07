import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';

export default function ProductsDashboard(ctx){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Products Dashboard' headerSubText='Product details peek'>
            <h1>Product Dashboard</h1>
        </AdminLayoutPage>
    )
}