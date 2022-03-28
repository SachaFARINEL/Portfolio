import { Card, Paper } from '@mui/material';
import * as React from 'react';


const Body = () => {

  return (
    <>
      <Card
        style={{ margin: 15 }}>
        <Paper
          elevation={3}
          style={{ margin: 15 }}>
          <h1>Test</h1>
        </Paper>
      </Card>

    </>
  )
};
export default Body;