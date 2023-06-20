import React, {useEffect , useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Component } from 'react';

const Home = () => {
    const [currentHref, setCurrentHref] = useState('');

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const gclidParam = urlParams.get('gclid');
      const gbraidParam = urlParams.get('gbraid');
      const param3p = urlParams.get('$3p');
      const ctaButton = document.getElementById('cta-button');
  
      if (gclidParam || gbraidParam) {
        //ctaButton.href = 'dynamic link with gclid / gbraid';
        setCurrentHref('referring link has GBRAID / GCLID ');
      } else if (param3p == 'a_facebook') {
        //ctaButton.href = 'dynamic link for fb';
        setCurrentHref('referring link is 3p facebook link');
      } else if (param3p && !(gclidParam || gbraidParam) ) {
        //ctaButton.href = 'dynamic link with gclid / gbraid';
        setCurrentHref('referring link is non SAN 3p branch link');
      }  else {
        ctaButton.href = 'https://anotherDomain.com';
        setCurrentHref('default QL');
      }
    }, []);

  return (
    <div className="App">        
      <Box sx={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" href="https://kartik-branch.github.io/RefExampleApp/?param=abc&gclid=CjwKCAUbhRAvD_BwE&ref=googleshopping&gbraid=R4RusLZDFJyOyx49">
          Mimic gclid / gbraid flow
        </Button>
      </Box>
      <Box sx={{ marginTop: '10px' }}>
        <Button variant="contained" color="primary" href="https://kartik-branch.github.io/RefExampleApp/?%243p=a_custom_1027171874645316557&_branch_match_id=1199221725510158336&utm_medium=paid%20advertising&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz04sKsnM1kssKNDLyczL1vcuSE72KzQ08nZMslc1MjEusE2MTy4tLsnPjTc0MDI3NDe0MDcxMzE1NjQzNTUHAFGadddGAAAA">
          Mimic Regular 3p Paid Media
        </Button>
      </Box>
      <Box sx={{ marginTop: '10px' }}>
        <Button variant="contained" color="primary" href="https://kartik-branch.github.io/RefExampleApp/?%243p=a_facebook&_branch_match_id=1199221725510158336&utm_medium=paid%20advertising&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz04sKsnM1kssKNDLyczL1vcuSE72KzQ08nZMslc1MjEusE2MT0tMTk3Kz88GAPh1BEs0AAAA">
          Mimic Facebook Ads Link
        </Button>
      </Box>
      <Box sx={{ marginTop: '20px' }}>
          <Button
            id="cta-button"
            variant="contained"
            color="secondary"
            href="https://anotherDomain.com">
            Final CTA 
          </Button>
          <span style={{ marginLeft: '14px' }}>{currentHref}</span>
      </Box>
    </div>
  );
}

export default Home;
