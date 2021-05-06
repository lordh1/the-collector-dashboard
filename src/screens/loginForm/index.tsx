import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { apiServiceAuth } from '../../services/apiService';
import { storeToken } from '../../store/localStorage';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import './style.scss';

const LoginForm = (): JSX.Element => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    const response = await apiServiceAuth({
      endpoint: '/auth/login',
      method: 'POST',
      body: {
        username,
        password,
      },
    });

    storeToken(response.access_token);
    history.replace('/analytic');
  };

  const onUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="LoginForm">
      <header>Login form</header>
      <TextInput label="Username" type="text" onChange={onUsernameInput} />
      <TextInput label="Password" type="password" onChange={onPasswordInput} />
      <Button label="Submit" onClick={onSubmit} />
    </div>
  );
};

export default LoginForm;
