import React from 'react';

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className='h-4 w-[40%] rounded-lg bg-gray-300 mt-1'>
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`rounded-lg h-full ${
          progressPercentage < 30 ? 'bg-red-600' : 'bg-green-600'
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
