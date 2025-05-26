import { useEffect , useState } from 'react';


function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
 //after using 'useEffect', below line renders 3 times:
 //1. firstly on mount
 //2. on setTimeout() for exchange data 
 //2. on setTimeout() for bankdata
  console.log("Hi, There, \n Re-rendering Starts !!! ")

  //without 'useEffect' it runs infinitely
  //as 'setBankData' keeps on changing, so, the re-rendering
  useEffect(function(){
    setTimeout(() => {
      console.log("Here comes Bank Data...\n")
      setBankData({
        income: 100
      });
    }, 3000);
},[])

  useEffect(function() {
    setTimeout(() => {
      console.log("Here comes Exchnage Data...\n");
      setExchangeData({
        returns: 100
      });
    }, 1000);
},[])

  //console.log("Hi there BEFORE !!!");
  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
  //console.log("Hi there AFTER !!!");

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App
