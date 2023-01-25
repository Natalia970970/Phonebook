import { Form, Label, Input, Button } from './../ContactForm/ContactForm.styled';
import { useState } from 'react';
import { logIn } from '../../redux/AuthOperations';
import { useDispatch } from 'react-redux';
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email,
        password,
      })
    );
    formReset();
  };
  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'password':
        setPassword(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Enter your email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Enter your password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Log In</Button>
    </Form>
  );
};
