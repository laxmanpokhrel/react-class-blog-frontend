import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../components/common/BlogCard';
import BlogSkeleton from '../../components/common/BlogCard/BlogSkeleton';
import { fetchBlogs } from '../../store/slice/blogSlice';
// import { fetchBlogs } from '../../store/slice/blogSlice';

export default function Blog() {
  const dispatch = useDispatch();
  const blogStatus = useSelector((state) => state.blog?.status);
  const blogs = useSelector((state) => state.blog?.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className="flex items-center p-4 flex-col gap-4 h-full ">
      <h1 className="text-2xl font-bold text-gray-900 font-roboto">
        Laxman Blogs
      </h1>
      <p className="text-gray-800 font-roboto">Learn the wisdom. </p>
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
    </div>
  );
}
