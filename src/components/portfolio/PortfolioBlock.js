import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { component, type, source, title } = props;

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         {/* Ternary condition */}
         {type === "img" ? <img src={component} /> : component}
         
         <h1 style={{ fontSize: '1.7rem' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.4rem'} py={'2rem'}>
            {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Dashboard'} icon={'fa fa-dashboard'} />
            </Box> */}
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;