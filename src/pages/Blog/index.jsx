import { useEffect, useState } from 'react';
import { fetchBlogs } from '../../services';
import BlogCard from '../../components/common/BlogCard';
import BlogSkeleton from '../../components/common/BlogCard/BlogSkeleton';

export default function Blog() {
  const [blogs, setBlogs] = useState();
  const [isBlogLoading, setIsBlogLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const result = await fetchBlogs();
        setBlogs(result);
        setIsBlogLoading(false);
      } catch (err) {
        console.log('Error fetching blogs', err);
      }
    })();
  }, []);

  return (
    <div className="flex items-center p-4 flex-col gap-4 h-full ">
      <h1 className="text-2xl font-bold text-gray-900 font-roboto">
        Laxman Blogs
      </h1>
      <p className="text-gray-800 font-roboto">Learn the wisdom. </p>
      <div className="grid grid-cols-12 gap-4">
        {isBlogLoading
          ? Array.from({ length: 6 })?.map((_, index) => (
              <BlogSkeleton key={index} />
            ))
          : blogs?.result?.map((blog) => (
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
