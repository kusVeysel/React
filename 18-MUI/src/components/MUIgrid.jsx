
import React from 'react';
import Grid from '@mui/material/Grid';

function MUIgrid() {
  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12, sm: 6, md: 8, lg: 9 }}>
          ITEM
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          ITEM
        </Grid>
      </Grid>
    </div>
  );
}

export default MUIgrid;
