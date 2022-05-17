
import Nav from './components/Nav';
import WelcomeMessage from './components/UI/WelcomeMessage';
import Date from './components/UI/Date';
import HouseholdIncome from './components/UI/HouseholdIncome';
import Scrolldown from './components/UI/Scrolldown';
import SummaryHeading from './components/UI/SummaryHeading';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Date/>
      <WelcomeMessage/>
      <HouseholdIncome/>
      <Scrolldown/>
      <SummaryHeading/>
    </div>
  );
}

export default App;
