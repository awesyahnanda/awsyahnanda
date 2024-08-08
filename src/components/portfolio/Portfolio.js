import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <>
            <Box id={'portfolio'} ref={innerRef}>
                <Grid container display={'flex'} justifyContent={'center'}>
                    {[1, 2, 3, 4].map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <PortfolioBlock
                                live={`https://www.canva.com/design/DAGL2FOtmnk/0RSiUYcLWK9PAR7L3019Dw/view?utm_content=DAGL2FOtmnk&utm_campaign=designshare&utm_medium=embeds&utm_source=link`}
                                source={`https://www.canva.com/design/DAGL2FOtmnk/0RSiUYcLWK9PAR7L3019Dw/view?utm_content=DAGL2FOtmnk&utm_campaign=designshare&utm_medium=embeds&utm_source=link`}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>

    );
};