import React from 'react';
import { Box } from "@mui/material";

export default function Resume({ innerRef }) {
   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>

         <iframe
            loading="lazy"
            style={{
               position: "absolute",
               width: "100%",
               marginTop: 60,
               height: "100%",
               top: 0,
               left: 0,
               border: "none",
               padding: 0,
               margin: 0
            }}
            src="/CV.pdf"
            allowfullscreen="allowfullscreen"
            allow="fullscreen">
         </iframe>
      </Box>
   )
}