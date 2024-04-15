import { Admin, Resource, List, Datagrid, TextField } from 'react-admin';
import { dataProvider } from '../../providers/dataProvider';
import { ProductCreate, ProductEdit } from '../Products/Products';

const ProductList = (props) => (
    <List {...props} perPage={10}>
        <Datagrid bulkActionButtons={false} rowClick="edit">
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="descricao" />
            <TextField source="preco" />
            <TextField source="quantidade" />
        </Datagrid>
    </List>
);

function Home() {
    return (
        <div>
            <Admin dataProvider={dataProvider}>
                <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} />
            </Admin>
        </div>
    );
}

export default Home;
