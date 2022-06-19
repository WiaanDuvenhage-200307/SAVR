
import Nav from './components/Nav';
import TheDate from './components/TheDate';
import Savings from './components/Savings';
import SummaryHeading from './components/SummaryHeading';
import TaxBracket from './components/TaxBracket';
import WelcomeCom from './components/WelcomeCom';
import IncomeAfterTax from './components/IncomeAfterTax';


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
    </div>
  );
}

export default App;
