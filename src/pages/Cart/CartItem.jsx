import { useState } from 'react';
import { useGetCartDetailByNameQuery } from '../../store/slice/cartSlice';

export default function CartItem({ cartId }) {
  const [count] = useState(0);
  // select cart ko details
  const { data } = useGetCartDetailByNameQuery({ cartId, count });
  console.log('🚀 ~ CartItem ~ data:', { cartId, data });

  const cartData = data?.result;

  return <div>{cartData.title}</div>;
}
