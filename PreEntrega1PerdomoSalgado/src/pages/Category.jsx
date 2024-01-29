import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProductsByCategory } from "../hooks/useProducts";


export const Category = () => {
  const { id } = useParams();

  const { productsData } = useGetProductsByCategory(id);

  return <ItemListContainer productsData={productsData} />;
};
