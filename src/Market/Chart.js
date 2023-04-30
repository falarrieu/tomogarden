import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Paper, Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const data = [
  { name: 'Jan', price: 1000 },
  { name: 'Feb', price: 1500 },
  { name: 'Mar', price: 2000 },
  { name: 'Apr', price: 1800 },
  { name: 'May', price: 2400 },
  { name: 'Jun', price: 2200 },
  { name: 'Jul', price: 2800 },
];

const ChartModal = ({ open, handleChartClose }) => {
  return (
    <Modal open={open} onClose={handleChartClose}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Paper style={{ position: 'relative', padding: '2rem' }}>
          <IconButton aria-label="close" onClick={handleChartClose} sx={{ position: 'absolute', top: 0, right: 0 }}>
            <Close />
          </IconButton>
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </Paper>
      </div>
    </Modal>
  );
};

export default ChartModal;
