import React,{useState} from 'react';
import Layout from './Layout';
import BarChart from '../Components/BarChart';
import ProgressBar from '../Components/ProgressBar';
import PieChart from '../Components/PieChart';


const Home = () => {
  const expensesData = [
    { day: 'Monday', expense: 100 },
    { day: 'Tuesday', expense: 150 },
     { day: 'Wednesday', expense: 900 },
     { day: 'today', expense: 100 },
     { day: 'Tuysday', expense: 150 },
    { day: 'Weunesday', expense: 900 },
    { day: 'Wednesday', expense: 900 },
    { day: 'today', expense: 100 },
    { day: 'Tuysday', expense: 150 },
    { day: 'Weunesday', expense: 900 },
  ];
  const pieData= [
    {category: 'Food', expense: 300,color: '#362d5f'},
    {category: "Movie", expense: 400,color: '#4b3e8c'},
    {category: 'Book', expense: 200,color: '#543ad6'},
    {category: 'Shopping', expense: 600, color: '#7B68DB'},
    {category: 'Travel', expense: 400,color: '#988bd7'},
    {category: 'Entertainment', expense: 500,color: '#a59bce'},
  ]
  const [budget,setBudget] = useState(0);
  const setBudget2 = () => {
    setBudget(prompt("Enter amount"));
  }
  let expense = 2000;
  let progressPercentage = (expense*100)/budget;

  return (
    <Layout>
      <div className='flex flex-col ml-0 w-full h-[calc(100vh-60px)]'>
        <div className='h-20% '>
          <BarChart expensesData={expensesData}/>
        </div>
        <div className='w-full h-6 flex mt-4 gap-2'>
          <h2 className=' w-32 rounded-lg h-full bg-[#d77d68] align-middle text-center text-white'>Your Budget</h2>
          <ProgressBar progressPercentage={progressPercentage}/>
          <h2>{expense}/{budget}</h2>
          <button className='bg-[#d77d68] rounded-lg w-32 h-full align-middle text-white font-normal' onClick={setBudget2}>Set Budget</button>
        </div>
        <div className='w-full flex justify-evenly mt-3 flex-col md:flex-row'>
          <PieChart pieData={pieData}/>
          <div className='w-full md:w-[60%] grid-cols-3 grid gap-2' >
            {pieData.map((data, index)=> (
              <div key={index} className='w-[12rem] h-32 flex font-medium justify-center items-center text-3xl text-white rounded-2xl' style={{backgroundColor: data.color}}>
                <h3>{data.category}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home