import React from 'react';

const Home = () => {
  return (
    <div className='bg-blue-200 md:w-4/6 w-full mx-auto bg-opacity-60 rounded-lg shadow-xl shadow-gray-400 lg:my-10 my-5 lg:p-5 p-2'>
      <h1 className='lg:text-4xl md:text-3xl text-xl text-center text-gray-600 font-semibold'>Hey There,</h1>
      <p className='text-center text-gray-500'>You have to login first to see the attendance sheet!</p>
      <p className='text-center text-gray-500'>Make sure you are logged in then you can see attendance button above</p>

    </div>
  );
};

export default Home;