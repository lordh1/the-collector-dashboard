import { useState } from 'react';
import './style.scss';
import Chart from '../../components/chart';
import TimeRange from '../../components/timeRange';
import SelectList from '../../components/selectList';

const chartTypes: Array<string> = ['out0-rx', 'out0-tx', 'out1-rx', 'out1-tx'];

function Analytic(): JSX.Element {
  const [timeRange, setTimeRange] = useState(0);
  const [chartType, setChartType] = useState(chartTypes[0]);

  const onTimeChangeHandler = (value: number) => {
    setTimeRange(value);
  };

  const onChartTypeChangeHandler = (type: string) => {
    setChartType(type);
  };

  return (
    <div className="Analytic">
      <SelectList
        label="Chart type"
        options={chartTypes}
        onChangeHandler={onChartTypeChangeHandler}
      />
      <TimeRange onChangeHandler={onTimeChangeHandler} />
      <Chart type={chartType} time={timeRange} />
    </div>
  );
}

export default Analytic;
