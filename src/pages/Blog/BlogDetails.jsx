import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { retrieveBlog } from '../../services';
import BlogDetailsSkeleton from './BlogDetailsSkeleton';

export default function BlogDetails() {
  const { blogName } = useParams();
  const [blog, setBlog] = useState();
  const [blogError, setBlogError] = useState(false);
  const [isBlogLoading, setIsBlogLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { result } = await retrieveBlog(blogName);
        setBlog(result);
        setIsBlogLoading(false);
      } catch (err) {
        console.log('Error fetching blogs', err);
        setBlogError(err);
        setIsBlogLoading(false);
      }
    })();
  }, []);

  return (
    <div className="flex items-center p-4 w-full h-full flex-col gap-2">
      {blogError ? (
        blogError.message || 'Error Fetching blog'
      ) : isBlogLoading ? (
        <BlogDetailsSkeleton />
      ) : (
        <>
          <h4 className="text-5xl">{blog?.title}</h4>
        </>
      )}
    </div>
  );
}
