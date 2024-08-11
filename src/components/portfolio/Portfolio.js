import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => {
                    return (
                        <Grid item xs={12} md={6} key={index}>
                            <PortfolioBlock component={project.component} type={project.type} source={project.source} title={project.title} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
};