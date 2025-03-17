import { hasErrorBoundary } from '@xmanscript/has-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToCart } from '../../../store/slice/cartSlice';
import { memo, useState } from 'react';

const BlogCard = memo(({ slug, title, summary, created_at, author }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => navigate(`/blog-details/${slug}`)}
      className="col-span-12 md:col-span-4 font-roboto lg:col-span-3  shadow p-4 border border-gray-300 rounded-2xl hover:bg-gray-50 cursor-pointer"
    >
      <div className="w-full flex gap-4 justify-end">
        {isLoggedIn ? (
          <button
            type="button"
            className=" cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/blog/edit/${slug}`);
            }}
          >
            <i className="material-symbols-outlined text-xs">edit</i>
          </button>
        ) : null}
        <button
          type="button"
          className=" cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (!isLoggedIn) navigate(`/login`);
            else {
              dispatch(addToCart(slug));
            }
          }}
        >
          <i className="material-symbols-outlined text-xs">shopping_cart</i>
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-700">{summary}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-sm text-gray-700">{author} - </p>
        <p className="text-sm text-gray-700">{created_at}</p>
      </div>
      <p>{count}</p>
      <button
        className="cursor-pointer"
        onClick={(e) => {
          setCount((prevCount) => prevCount + 1);
          e.stopPropagation();
        }}
      >
        Plus
      </button>
    </div>
  );
});

BlogCard.displayName = 'BlogCard';

export default hasErrorBoundary(BlogCard);
