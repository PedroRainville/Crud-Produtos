import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import { getProducts, getProductsId, postProducts, deleteProductsId, editProducts } from '../api/ProductsApi';
import { ProdutoType } from '../services/types';


export const dataProvider: DataProvider = {
    getList: async () => {
        const returnData = await getProducts();
        return {
            data: returnData,
            total: returnData.length,
        };
    },

    getOne: async (resource, params) => {
        const returnData = await getProductsId(params.id);
        return {
            data: returnData,
        };
    },

    update: async (resource, params) => {
        try {
            const updatedProduct = await editProducts(params.id, params.data);
            return { data: updatedProduct };
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            throw new Error(`Erro ao atualizar produto: ${error.message}`);
        }
    },
    
    create: async (resource, params: ProdutoType) => {
        const returnData = await postProducts(params.data);
        return {
            data: { ...returnData, id: returnData.id },
        };
    },

    delete: async (resource, params) => {
        try {
            await deleteProductsId(params.id);
            console.log(`Produto com ID ${params.id} excluído com sucesso.`);
            return { data: { id: params.id } };
        } catch (error) {
            console.error(`Erro ao excluir produto com ID ${params.id}:`, error);
            throw new Error(`Erro ao excluir produto com ID ${params.id}: ${error.message}`);
        }
    },
};

