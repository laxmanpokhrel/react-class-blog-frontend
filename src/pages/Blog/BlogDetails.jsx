import { useParams } from 'react-router';

export default function BlogDetails() {
  const { blogName } = useParams();
  return (
    <div>
      <h4>Blog Title</h4>
      <p>{blogName}</p>
    </div>
  );
}
