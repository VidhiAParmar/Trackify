import React,{useContext} from 'react'
import Layout from "../Components/Layout";
import myContext from '../context/myContext';

function Expenses() {
  const context = useContext(myContext);
  const {mode} = context;
  return (
    <Layout>
      <div style={{color: mode === 'dark' ? 'white' : ''}}>
        expense
      </div>
    </Layout>
  )
}

export default Expenses
