import React,{useContext} from 'react'
import Layout from "../Components/Layout";
import myContext from '../context/myContext';

function Report() {
  const context = useContext(myContext);
  const {mode} = context;
  return (
    <Layout>
    <div style={{color: mode === 'dark' ? 'white' : ''}}>
        report
      </div>
  </Layout>
  )
}

export default Report
