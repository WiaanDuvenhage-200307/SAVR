import AverageForm from './components/AverageForm';
import Link from './components/Link';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Link page="https://facebook.com">Facebook</Link>

      <AverageForm/>
    </div>
  );
}

export default App;
