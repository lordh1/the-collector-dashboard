import { useState } from 'react';
import './style.scss';

type propsType = {
  onChangeHandler: (time: number) => void;
};

const TimeRange = ({ onChangeHandler }: propsType): JSX.Element => {
  const [time, setTime] = useState(0);

  const changeTimeHandler = (delta: number) => {
    setTime(time + delta);
    onChangeHandler(time);
  };

  const onKeyPress = (e: React.KeyboardEvent) => e.preventDefault();

  return (
    <div className="TimeRange">
      <span
        className="TimeRange__button"
        onClick={() => changeTimeHandler(-1)}
        onKeyPress={onKeyPress}
        role="button"
        tabIndex={0}
      >
        -
      </span>
      <span
        className="TimeRange__button"
        onClick={() => changeTimeHandler(1)}
        onKeyPress={onKeyPress}
        role="button"
        tabIndex={0}
      >
        +
      </span>
      {' '}
      {time}
      {' '}
      hours from the past
    </div>
  );
};

export default TimeRange;
