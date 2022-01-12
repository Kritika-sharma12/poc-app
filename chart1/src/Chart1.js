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
const  Chart1 = () => {
    const data = [
        { argument:'Monday', value:10 },
        { argument:'Tuesday', value:40 },
        { argument:'Wednesday', value:10 },
        { argument:'Thursday', value:20 },
        { argument:'Friday', value:20 },
      ];
    return ( 
        <Paper>
                     <Chart
                        data={data}
                      >
                         <PieSeries valueField="value" argumentField="argument" />
                         <Title text="Studies per day"/>
                     </Chart>
                </Paper>
     );
}
 
export default Chart1;