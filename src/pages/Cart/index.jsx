import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function Cart() {
  const products = useSelector((state) => state.cart.products);

  return (
    <div>
      {products.map((item) => (
        <CartItem key={item} cartId={item} />
      ))}
    </div>
  );
}
