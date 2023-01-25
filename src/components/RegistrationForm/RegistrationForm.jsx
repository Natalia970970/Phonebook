import { Form, Label, Button, Input, ButtonText } from './../ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/AuthOperations';

export const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(
        register({
            name,
            email,
            password,
        })
        );
        formReset();
    };
    const formReset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    const handleChange = event => {
        switch (event.currentTarget.name) {
        case 'name':
            setName(event.currentTarget.value);
            break;
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
            Enter your name
            <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>
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

        <Button type="submit"><ButtonText>Sign In</ButtonText></Button>
        </Form>
    );
};
