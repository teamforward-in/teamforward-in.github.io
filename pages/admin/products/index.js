import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';

export default function ProductsHome(){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Products Home' headerSubText='Manage product inventory'>
            <h1>Products Home</h1>
        </AdminLayoutPage>
    )
}