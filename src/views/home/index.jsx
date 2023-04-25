import { getProducts } from "../../features/products/productsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Product from "../../components/Product";
import BagSidebar from "../../components/BagSidebar";

const Home = () => {
  const [openBag, setOpenBag] = useState(false);
  const [bagTotal, setBagTotal] = useState(0);
  const [bagProducts, setBagProducts] = useState([]);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    ...state.products,
  }));

  const openCloseBagHandler = () => {
    setOpenBag(!openBag);
  };

  const addProductToBag = (product) => {
    if (bagProducts.find((bagProduct) => bagProduct.id === product.id)) {
      const newBagProducts = bagProducts.map((bagProduct) => {
        if (bagProduct.id === product.id) {
          return {
            ...bagProduct,
            quantity: bagProduct.quantity + 1,
          };
        }
        return bagProduct;
      });
      setBagProducts(newBagProducts);
    } else {
      setBagProducts([...bagProducts, { ...product, quantity: 1 }]);
    }
  };

  const onChangeQuantity = (e, product) => {
    const newBagProducts = bagProducts.map((bagProduct) => {
      if (bagProduct.id === product.id) {
        return {
          ...bagProduct,
          quantity: Number(e),
        };
      }
      return bagProduct;
    });
    setBagProducts(newBagProducts);
  };

  const deleteProductFromBag = (product) => {
    const newBagProducts = bagProducts.filter(
      (bagProduct) => bagProduct.id !== product.id
    );
    setBagProducts(newBagProducts);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBagTotal(bagProducts.length);
    }, 500);
  }, [bagProducts]);

  return (
    <>
      <Header openCloseBagHandler={openCloseBagHandler} bagTotal={bagTotal} />
      <section className="px-8 py-5 mt-20">
        <BagSidebar
          openBag={openBag}
          openCloseBagHandler={openCloseBagHandler}
          bagProducts={bagProducts}
          onChangeQuantity={onChangeQuantity}
          deleteProductFromBag={deleteProductFromBag}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              bagProducts={bagProducts}
              addProductToBag={addProductToBag}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
