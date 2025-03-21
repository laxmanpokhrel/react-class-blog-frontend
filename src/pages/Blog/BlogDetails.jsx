import { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import BlogDetailsSkeleton from './BlogDetailsSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveBlog } from '../../store/slice/blogSlice';

const Component = () => {
  // Expensive Component
  const { blogName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blog.retrieveBlogDetail);

  const retrieveBlogStatus = useSelector(
    (state) => state.blog.retrieveBlogStatus
  );

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { result } = await retrieveBlog(blogName);
  //       setBlog(result);
  //       setIsBlogLoading(false);
  //     } catch (err) {
  //       console.log('Error fetching blogs', err);
  //       setBlogError(err);
  //       setIsBlogLoading(false);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    dispatch(retrieveBlog(blogName));
  }, [blogName]);

  return (
    <div className="flex lg:w-1/2 p-4 w-full mx-auto h-full flex-col gap-2">
      <button
        className="flex items-center gap-2 hover:bg-gray-100 text-xs w-fit px-2 py-1 rounded-lg cursor-pointer"
        onClick={() => navigate('/blog')}
      >
        <i className="material-symbols-outlined text-xs">keyboard_backspace</i>
        Back to blogs
      </button>
      {retrieveBlogStatus === 'rejected' ? (
        'Error Fetching blog'
      ) : retrieveBlogStatus === 'pending' ? (
        <BlogDetailsSkeleton />
      ) : (
        <>
          {blog?.featured ? (
            <i className="material-symbols-outlined text-sm text-yellow-400">
              star
            </i>
          ) : null}
          <h4 className="text-5xl font-semibold">{blog?.title}</h4>
          <div className="flex gap-2">
            <p className="text-sm">{blog?.author} : </p>
            <p className="text-sm">{blog?.created_at}</p>
          </div>
          <p className="flex items-center text-xs">
            <i className="material-symbols-outlined text-xs">book</i>{' '}
            {blog?.read_count}
          </p>

          <div className="flex gap-3">
            {blog?.tags?.map((tag) => (
              <p
                className="px-2  border border-gray-400 rounded-2xl text-xs bg-gray-200"
                key={tag}
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-xl italic mt-8">{blog?.summary}</p>
          <p
            dangerouslySetInnerHTML={{ __html: blog?.body }}
            className="mt-4"
          ></p>
        </>
      )}
    </div>
  );
};

const BlogDetails = memo(Component);

export default BlogDetails;
