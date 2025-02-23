import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { patchBlog, postBlog, retrieveBlog } from '../../services';
import { useNavigate, useParams } from 'react-router';

const blogFields = [
  { name: 'Title', id: 'title', type: 'input', inputType: 'text' },
  { name: 'Summary', id: 'summary', type: 'textarea' },
  { name: 'Author', id: 'author', type: 'input', inputType: 'text' },
  { name: 'Created At', id: 'created_at', type: 'input', inputType: 'date' },
  {
    name: 'Featured',
    id: 'Featured',
    type: 'radio',
    options: ['true', 'false'],
  },
  { name: 'Body', id: 'body', type: 'textarea' },
  { name: 'Tags', id: 'tags', type: 'input', inputType: 'text' },
];

export default function CreateBlog() {
  const { logout } = useContext(AuthContext);
  const [blogData, setBlogData] = useState({});
  const navigate = useNavigate();
  const { blogSlug } = useParams();

  useEffect(() => {
    if (!blogSlug) return;

    (async () => {
      try {
        const { result } = await retrieveBlog(blogSlug);
        setBlogData(result);
      } catch (err) {
        console.log('Error fetching blogs', err);
      }
    })();
  }, [blogSlug]);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    logout();
  };

  const handleBlogFormSubmit = async (e) => {
    e.preventDefault();
    if (blogSlug) {
      await patchBlog(blogSlug, blogData);
    } else {
      await postBlog(blogData);
    }
    navigate('/user-blog');
  };

  return (
    <div>
      <button
        className="cursor-pointer px-2 py-1 p-2 bg-gray-200 rounded-lg "
        type="button"
        onClick={logoutHandler}
      >
        Logout
      </button>

      <form
        onSubmit={handleBlogFormSubmit}
        className="flex flex-col gap-3  md:w-1/2 w-full mx-auto"
      >
        <h2 className="text-2xl font-semibold">
          {blogSlug ? 'Edit blog' : 'Add new blog'}
        </h2>
        {blogFields.map((field) => {
          return (
            <div key={field.id} className="flex flex-col gap-1">
              <label htmlFor="title">{field.name}</label>
              {field.type === 'input' ? (
                <input
                  type={field.inputType}
                  name={field.name}
                  id={field.id}
                  value={blogData[field.id]}
                  onChange={(e) =>
                    setBlogData((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }))
                  }
                  className="border border-gray-400 h-8 md:w-1/2 w-full rounded-lg p-2"
                />
              ) : field.type === 'textarea' ? (
                <textarea
                  rows="5"
                  name={field.name}
                  id={field.id}
                  value={blogData[field.id]}
                  onChange={(e) =>
                    setBlogData((prev) => ({
                      ...prev,
                      [field.id]: e.target.value,
                    }))
                  }
                  className="border border-gray-400  md:w-1/2 w-full rounded-lg p-2"
                />
              ) : field.type === 'radio' ? (
                field.options.map((option) => (
                  <div key={option} className="flex gap-2 ">
                    <input
                      type="radio"
                      id={option}
                      name={field.id}
                      value={option}
                      checked={blogData[field.id] === option}
                      onChange={(e) =>
                        setBlogData((prev) => ({
                          ...prev,
                          [field.id]: e.target.value,
                        }))
                      }
                    />
                    <label htmlFor={option} className="capitalize">
                      {String(option)}
                    </label>
                  </div>
                ))
              ) : null}
            </div>
          );
        })}
        <button
          type="submit"
          className="w-fit px-2 py-1 rounded-lg bg-green-600 text-white cursor-pointer"
        >
          {blogSlug ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
