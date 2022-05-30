
import Nav from './components/Nav';
import WelcomeMessage from './components/UI/WelcomeMessage';
import Date from './components/UI/Date';
import HouseholdIncome from './components/UI/HouseholdIncome';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Date/>
      <WelcomeMessage/>
      <HouseholdIncome/>
    </div>
  );
}

export default App;
