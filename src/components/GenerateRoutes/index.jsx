import { Route, Routes } from 'react-router';

export default function GenerateRoutes({ routes }) {
  return (
    <Routes>
      {routes?.map(({ name, path, element: Element }) => (
        <Route key={name} path={path} element={<Element />} />
      ))}
    </Routes>
  );
}
