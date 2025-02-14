import { appRoutes } from './routes/approutes';
import GenerateRoutes from './components/GenerateRoutes';

function App() {
  return (
    <div className="w-screen h-screen">
      <GenerateRoutes routes={appRoutes} />
    </div>
  );
}

export default App;
