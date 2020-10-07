import { useRouter } from 'next/router';
import AdminLayoutPage from '../index';
export default function ContactsHome(ctx){
    const router = useRouter();
    return (
        <AdminLayoutPage headerText='Contacts Home' headerSubText='Manage contacts'>
            <h1>Contacts Home</h1>
        </AdminLayoutPage>
    )
}