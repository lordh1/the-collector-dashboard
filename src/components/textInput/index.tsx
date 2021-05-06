import './style.scss';

type propsType = {
  label: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ label, type, onChange }: propsType): JSX.Element => (
  <div className="TextInput">
    {label}
    {' '}
    <input type={type} onChange={onChange} />
  </div>
);

export default TextInput;
