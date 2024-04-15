import api from "./api";
import { ProdutoType } from "../services/types";

export async function getProducts(): Promise <ProdutoType[]> {
    const response = await api.get(`produtos`);
    return response.data;
}

export async function getProductsId(id: string) : Promise <ProdutoType> {
    const response = await api.get(`produtos/${id}`);
    return response.data;
}

export async function deleteProductsId(id: string) {
    await api.delete(`produtos/${id}`);
}

export async function postProducts(product: ProdutoType) : Promise <ProdutoType> {
    const response = await api.post(`produtos`, product);
    return response.data;
}

export async function editProducts(id: string, productData: ProdutoType): Promise<ProdutoType> {
    const response = await api.put(`produtos/${id}`, productData);
    return response.data;
}

