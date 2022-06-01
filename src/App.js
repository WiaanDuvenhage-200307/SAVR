
import Nav from './components/Nav';
import Date from './components/Date';
import Savings from './components/Savings';
import SummaryHeading from './components/SummaryHeading';
import TaxBracket from './components/TaxBracket';
import WelcomeCom from './components/WelcomeCom';
// import AverageForm from './components/classActivities/AverageForm';


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
