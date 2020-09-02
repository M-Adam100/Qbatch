import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Copyright() {
    return (
      
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <a color="inherit" href="http://www.qbatch.com/">
            QBatch 
            </a>{' '}
            {new Date().getFullYear()-5}
            {'.'}
        </Typography>
      
    );
  }