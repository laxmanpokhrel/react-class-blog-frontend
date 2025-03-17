import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../components/common/BlogCard';
import BlogSkeleton from '../../components/common/BlogCard/BlogSkeleton';
import { fetchBlogs } from '../../store/slice/blogSlice';
import { useNavigate } from 'react-router';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import Chart from './Chart';
// import { fetchBlogs } from '../../store/slice/blogSlice';

export default function Blog() {
  const dispatch = useDispatch();
  const blogStatus = useSelector((state) => state.blog?.status);
  const blogs = useSelector((state) => state.blog?.blogs);
  const products = useSelector((state) => state.cart.products);
  console.log('🚀 ~ Blog ~ products:', products);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className="flex items-center p-4 flex-col gap-4 h-full relative">
      <h1 className="text-2xl font-bold text-gray-900 font-roboto">Blogs</h1>
      <p className="text-gray-800 font-roboto">Learn the wisdom. </p>
      <div className="fixed top-4 right-9">
        <button
          type="button"
          className=" cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (!isLoggedIn) navigate(`/login`);
            else {
              navigate('/cart');
            }
          }}
        >
          <i className="material-symbols-outlined text-xs">shopping_cart</i>
        </button>
        <span className="absolute top-0 -right-4 h-6 w-6 bg-green-300 rounded-full text-center flex items-center justify-center text-sm -translate-y-1/2">
          {products.length}
        </span>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {blogStatus === 'pending'
          ? Array.from({ length: 6 })?.map((_, index) => (
              <BlogSkeleton key={index} />
            ))
          : blogs?.map((blog) => (
              <BlogCard
                key={blog.title}
                title={blog.title}
                slug={blog.slug}
                summary={blog.summary}
                created_at={blog.created_at}
                author={blog.author}
              />
            ))}
      </div>
      <Chart />
    </div>
  );
}
