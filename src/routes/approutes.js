import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetails = lazy(() => import('../pages/Blog/BlogDetails'));
const UserBlog = lazy(() => import('../pages/UserBlog'));
const Login = lazy(() => import('../pages/Login'));
const CreateBlog = lazy(() => import('../pages/CreateBlog'));

export const appRoutes = [
    { name: "home", path: "/", element: Home },
    { name: "blog", path: "/blog", element: Blog },
    { name: "blog-details", path: "/blog-details/:blogName", element: BlogDetails },
    { name: "user-blog", path: "/user-blog", element: UserBlog },
    { name: "user-blog", path: "/create-blog", element: CreateBlog, authenticated: true },
    { name: "login", path: "/login", element: Login }
]