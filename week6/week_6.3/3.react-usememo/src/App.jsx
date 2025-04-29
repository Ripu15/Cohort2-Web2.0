import { useEffect, useState , useMemo } from 'react'

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
//It will execute after 5 secs
  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },5000)
  }, [])

  console.log("BEFORE !!!");
  //It runs even after after 5 secs even if only 'bankData' is changed, actually it should not,so,lets memoize it
  //it runs only if state variables 'exchange1Data' or 'exchange2Data' changes
 
   const cryptoReturns = useMemo(()=> {
    return  exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data,exchange2Data]);

  console.log("AFTER !!!");

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App