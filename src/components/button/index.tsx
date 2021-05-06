import './style.scss';

type propsType = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: propsType): JSX.Element => {
  const onKeyPress = (e: React.KeyboardEvent) => e.preventDefault();

  return (
    <div
      onClick={onClick}
      onKeyDown={onKeyPress}
      role="button"
      className="Button"
      tabIndex={0}
    >
      {label}
    </div>
  );
};

export default Button;
