
import AdminCatalog from './AdminCatalog';
import AdminHeader from './AdminHeader'


function Admin(){
    return(
        <div className="admin">
            <AdminHeader />
            <AdminCatalog />
        </div>
    );
}

export default Admin