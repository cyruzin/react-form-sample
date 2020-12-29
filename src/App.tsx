import User from './modules/user';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
