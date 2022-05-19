
import Nav from './components/Nav';
import WelcomeMessage from './components/UI/WelcomeMessage';
import Date from './components/UI/Date';
import HouseholdIncome from './components/UI/HouseholdIncome';
import Scrolldown from './components/UI/Scrolldown';
import SummaryHeading from './components/UI/SummaryHeading';
import TotalIncome from './components/UI/TotalIncome';
import MonthlyExpenses from './components/UI/MonthlyExpenses';
import SumForm from './components/SumForm';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Date/>
      <WelcomeMessage/>
      <HouseholdIncome/>
      <Scrolldown/>
      <SummaryHeading/>
      <TotalIncome/>
      <MonthlyExpenses/>
    </div>
  );
}

export default App;
