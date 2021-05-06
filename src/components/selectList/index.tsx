import './style.scss';

type propsType = {
  label: string;
  options: Array<string>;
  onChangeHandler: (type: string) => void;
};

const SelectList = ({
  label,
  options,
  onChangeHandler,
}: propsType): JSX.Element => (
  <div className="SelectList">
    {label}
    <select onChange={(e) => onChangeHandler(e.target.value)}>
      {options.map((item, key) => (
        <option key={key.toString()}>{item}</option>
      ))}
    </select>
  </div>
);

export default SelectList;
