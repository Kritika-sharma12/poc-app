import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  LineSeries
} from '@devexpress/dx-react-chart-material-ui';
import React from 'react';
const Chart2 = () => {
    const data1 = [
        { x: 1, y: 30 },
        { x: 2, y: 40 },
        { x: 3, y: 5 },
        { x: 4, y: 2 },
        { x: 5, y: 21 },
      ];
    return ( 
        <Paper>
                   <Chart
                       data={data1}
                   >
                   <ArgumentAxis />
                   <ValueAxis />
                   <LineSeries valueField="y" argumentField="x" />
                   </Chart>
                </Paper>
     );
}
 
export default Chart2;