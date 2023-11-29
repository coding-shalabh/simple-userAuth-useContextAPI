// About.js

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { AppProvider, useAuth } from '../Context/context';

const About = () => {

  const [currentData, setCurrentData] = useState(null);

  const data = useAuth();

  useEffect(() => {
      setCurrentData(data.userData);
      console.log(data);
  }, [data]);

  return (
    <AppProvider>

    <div className='UserDetails'>
      {currentData ? (
        <>
          <Box className='userContent' style={{ fontSize: '40px' }}>
            {`Hello ${currentData.username} 👋,`}
          </Box>
          <Box>
            {`Hope you're doing well, I get to know that you have recently started living at ${currentData.address.street}, ${currentData.address.suite}, ${currentData.address.city}. Also, you got a stunning website :`}
            <strong>
              <u>
                <a style={{ fontSize: '20px' }} href={"https://" + currentData.website}>
                  {(currentData.website).split('.')[0]}
                </a>
              </u>
            </strong>
          </Box>
          <Box>Thank you for signing up; do visit again.</Box>
        </>
      ) : 'Loading'}
    </div>
    </AppProvider>
  );
};

export default About;
