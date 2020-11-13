
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'

function App() {
  return (
    <div >
      <Header/>
      <div id="container">
        <Balance/>
        <IncomeExenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      
    </div>
  );
}

export default App;
