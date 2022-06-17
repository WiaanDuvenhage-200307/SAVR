
import Nav from './components/Nav';
import TheDate from './components/TheDate';
import Savings from './components/Savings';
import SummaryHeading from './components/SummaryHeading';
import TaxBracket from './components/TaxBracket';
import WelcomeCom from './components/WelcomeCom';
import IncomeAfterTax from './components/IncomeAfterTax';
// import AverageForm from './components/classActivities/AverageForm';


function App() {
  return (
    <div className="App">
      <Nav/>
      <TheDate/>
      <WelcomeCom/>
      <SummaryHeading/>
      <TaxBracket/>
      <IncomeAfterTax/>
      <Savings/>
      {/* <AverageForm/> */}
    </div>
  );
}

export default App;
