
import Nav from './components/Nav';
import Date from './components/UI/Date';
import Savings from './components/UI/Savings';
import SummaryHeading from './components/UI/SummaryHeading';
import TaxBracket from './components/UI/TaxBracket';
import WelcomeCom from './components/UI/WelcomeCom';
// import AverageForm from './components/AverageForm';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Date/>
      <WelcomeCom/>
      <SummaryHeading/>
      <TaxBracket/>
      <Savings/>
      {/* <AverageForm/> */}
    </div>
  );
}

export default App;
