import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center p-4 flex-col gap-4 h-full ">
      <h1 className="text-4xl font-bold text-gray-900 font-roboto">
        Welcome to my website
      </h1>
      <button
        type="button"
        className=" p-2 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => navigate('/blog')}
      >
        Read my blogs
      </button>
    </div>
  );
}
