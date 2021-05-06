import { useState } from 'react';
import Chart from 'react-google-charts';
import { apiService } from '../../services/apiService';
import Button from '../button';
import './style.scss';

type dataType = {
  timestamp: number;
  value: number;
};

const initData = [
  ['Timestamp', 'Download'],
  ['0', 0],
];

type propsType = {
  type: string;
  time: number;
};

const ChartBox = ({ type, time }: propsType): JSX.Element => {
  const [data, setData] = useState([...initData]);

  const onGetData = async () => {
    const now = Math.floor(new Date().getTime() / 1000) + 3600;
    const past = now + time * 3600;

    const response = await apiService({
      endpoint: `/data/${type}/${past}/${now}`,
      method: 'GET',
    });

    const filtered = response.map((item: dataType) => [
      new Date(item.timestamp * 1000).toUTCString(),
      item.value,
    ]);

    setData([...initData, ...filtered]);
  };
  return (
    <div className="Chart">
      <Button label="GetData" onClick={onGetData} />
      <div style={{ display: 'flex', maxWidth: 2000 }}>
        <Chart
          width={1000}
          height="300px"
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            title: 'Company Performance',
            hAxis: { title: 'Time', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: '90%', height: '70%' },
            // lineWidth: 25
          }}
        />
      </div>
    </div>
  );
};

export default ChartBox;
