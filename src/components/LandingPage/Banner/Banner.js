import React from 'react';
import './Banner.css';


function Banner() {
  return (
    <>
    <div className='banner-container'>
      <div className='banner'>
        <img 
          src="https://s3-alpha-sig.figma.com/img/8021/96a6/83d8b4f496c94cf0a33728d8f6e90e4b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AnOVAv2pDqyOqrhEPUrdDKtoHWyFUdW1P4VRti-j4MUEhfdbJsRF21yJRMZeB5UkfLaWTSf-XibJ8ZAZ8BeXFgc2ZNnzLMKzN6C~W6XaRXpyTLAF7oi~lys9OQS4wprn7gDbiqVMwJ6q8wPqbcjXkRnsRJovQSNVstkj1bgrPP6NSO4Knj623uxKral-lUSznfRzWCzLHUcDKI6QQ0mfznUDY9cVAUg3HvBibpswbhPYYG~zwTHR6v19BP9Yn621JBGrVQMQBbhMOpz1JK~3CQkxLvFHMRlZZ85ZyUlp8aOX~k6JUOfy3CMAdUkEYNn8vRgr10oFVaj~detmMWowbQ__" 
          alt="Banner Background" 
          className='banner-image'
        />
        <div className='banner-text-container'>
          <h1 className='banner-text'>Not sure where to go? Perfect.</h1>
          <button className='banner-text-button'>I'm flexible</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Banner;
