import './App.css';
import { appRoutes } from './routes/approutes';
import GenerateRoutes from './components/GenerateRoutes';

function App() {
  return (
    <div className="bg-blue-100 p-4 rounded-2xl">
      <GenerateRoutes routes={appRoutes} />
    </div>
  );
}

export default App;
