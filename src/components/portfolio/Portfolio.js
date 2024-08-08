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
                                live={`https://public.tableau.com/views/E-CommerceDashboardBetaGroup/MainDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link`}
                                source={`https://github.com/awesyahnanda/ECommerceChurn-Analysis-PredictiveModel`}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>

    );
};