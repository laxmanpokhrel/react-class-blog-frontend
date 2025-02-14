import { useNavigate } from 'react-router';

export default function BlogCard({ slug, title, summary, created_at, author }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog-details/${slug}`)}
      className="col-span-12 md:col-span-4 font-roboto lg:col-span-3  shadow p-4 border border-gray-300 rounded-2xl hover:bg-gray-50 cursor-pointer"
    >
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-700">{summary}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-sm text-gray-700">{author} - </p>
        <p className="text-sm text-gray-700">{created_at}</p>
      </div>
    </div>
  );
}
