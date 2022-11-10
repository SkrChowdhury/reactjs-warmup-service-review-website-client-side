import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError('Please provide atleast two uppercase character');
      return;
    }
    if (password.length < 8) {
      setPasswordError('Please provide 8 char');

      return;
    }
    setPasswordError('');

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);

        console.log('registered user:', user);
        form.reset();
      })

      .catch((error) => {
        console.error('error:', error);
        setPasswordError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className=" my-6 mx-auto w-1/2">
        <h3 className="text-center text-3xl my-3">Register Now.</h3>
        <Form
          className="container w-50 border rounded p-10"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="mr-4">Full Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your full name."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="mr-4">Photo Url</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your photo url."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="mr-4">Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="mr-4">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
            <p className="text-danger">{passwordError}</p>
            {success && (
              <p className="text-success">User created successfully</p>
            )}
          </Form.Group>
          <div>
            <p type="button">
              Already have an account?{' '}
              <Link to="login" className="text-emerald-600 font-bold">
                Log In
              </Link>
            </p>
          </div>

          <Button
            variant="primary"
            type="submit"
            className="bg-sky-400 text-white px-4 py-2 rounded-2xl mt-5"
          >
            Register
          </Button>
          <div>
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="bg-orange-400 text-white px-4 py-2 rounded-2xl mt-5"
            >
              Register with Google
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
