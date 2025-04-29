import { useMemo } from 'react';
import { useEffect, useState, useCallback} from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("Re-renders !!! ");

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },5000)
  }, [])

//callback is not about minimizing the amount of code that runs
//callback is about NOT rendering a child component, if func doesnot need to change across renders
//'calculateCryptoReturns' stores a function
  const calculateCryptoReturns = useCallback(function(){
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])

  const incomeTax = (calculateCryptoReturns() + bankData.income) * 0.3;

  return (
    <div>
        <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns}/>
    </div>
  )
}
//The below function accepts another function as an argument
function CryptoGainsCalculator({calculateCryptoReturns}){
  console.log("Crypto child Re-renders")
  return <div>
    Your crypto returns are {calculateCryptoReturns()}
  </div>
}

export default App