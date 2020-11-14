
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div id="container">
        <Balance/>
        <IncomeExenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      
    </GlobalProvider>
  );
}

export default App;
