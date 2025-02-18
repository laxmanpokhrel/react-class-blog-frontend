import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function CreateBlog() {
  const { logout } = useContext(AuthContext);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    logout();
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
    </div>
  );
}
