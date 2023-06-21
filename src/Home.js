import React, {useEffect , useState} from 'react';
import './App.css';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Home ({setData}) {
    const [currentHref, setCurrentHref] = useState('');

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const gclidParam = urlParams.get('gclid');
      const gbraidParam = urlParams.get('gbraid');
      const param3p = urlParams.get('$3p');
      const googleParams = "?%243p=a_google&"
      const baseDomainLink = 'https://branch.devishetty.net/';
      const ctaButton = document.getElementById('cta-button');

      if (gclidParam || gbraidParam) {
        if(gclidParam){
          googleParams += "gclid=" + gclidParam;
        }
        if (gbraidParam){
          googleParams += "gbraid=" + gbraidParam;
        } 
        ctaButton.href = baseDomainLink + googleParams;
        setCurrentHref('referring link has gbraid/gclid - ' + ctaButton.href);
      } else if (param3p && !(gclidParam || gbraidParam) ) {
        ctaButton.href = baseDomainLink + '?%243p=' + param3p;
        setCurrentHref('referring link was non SAN link - ' + ctaButton.href);
      }  else {
        ctaButton.href = 'https://branch.devishetty.net/XJ5lkL27LAb';
        setCurrentHref('default QL - ' + ctaButton.href);
      }
      setData(ctaButton.href);

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
