import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import ProductList from './feature/productList/ProductList';
import CartModal from './feature/cart/CartModal';

function App() {
  let [isOpenModal,setIsOpenModal] = useState(false)

  let hendleShowModa = () => {
    setIsOpenModal(true)
  }

  let hendleHideModa = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal ? <CartModal hendleHideModa={hendleHideModa} /> : null}
      <Header hendleShowModa={hendleShowModa} />
      <main className="max-w-7xl mx-auto px-4">
        <ProductList />
      </main>
    </>
  );
}

export default App
