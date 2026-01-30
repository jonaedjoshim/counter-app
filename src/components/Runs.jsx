import React from 'react';

const Runs = ({ run, singles, fours, sixes }) => {
  return (
    <div className='flex flex-col gap-2'>
      <span><small>Total Singles : {singles}</small></span>
      <span><small>Total Fours : {fours}</small></span>
      <span><small>Total Sixes : {sixes}</small></span>
      <h2 className='font-semibold text-3xl mt-5'>Run : {run}</h2>
    </div>
  );
};

export default Runs;