import { Grid, styled, Typography } from '@mui/material';
import { Container as MuiContainer } from '@mui/system';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Layout from '../components/Layout';
import TextArea from '../components/TextArea';
import TextField from '../components/TextField';
import validateEmail from '../utils/helpers/validateEmail';

const name = 'Michael Peter';

export default function Contact() {
  const location = useLocation();
  const pathname = location.pathname;
  const [data, setData] = useState(initData);
  const [error, setError] = useState(initError);
  const [focus, setFocus] = useState('');

  if (document) {
    document.title = 'Contact Me | kael';
  }

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);

  const submit = (e) => {
    e.preventDefault();

    setFocus('');

    for (const key in data) {
      if (!data[key]) {
        setError((error) => ({ ...error, [key]: true }));
      } else {
        setError((error) => ({ ...error, [key]: false }));
      }
    }

    if (Object.values(error).some((_) => _ === true)) return;

    if (!validateEmail(data.email)) {
      return;
    }

    const clientName = `${data.firstName} ${data.lastName}`;
    const myEmail = 'michaelpeter.ai@gmail.com';

    open(
      `mailto:${myEmail}?subject=${encodeURI(clientName)}&body=${encodeURI(
        data.message
      )}`,
      '_blank'
    );
  };

  return (
    <Layout noNav>
      <Container component='main'>
        <Header>Contact Me</Header>
        <SubHeader>
          Hi there, contact me to ask me about anything you have in mind.
        </SubHeader>

        <Form onSubmit={submit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputStack>
                <Label htmlFor='first_name'>First Name</Label>

                <TextField
                  id='first_name'
                  placeholder='Enter your first name'
                  value={data.firstName}
                  onFocus={(e) => setFocus(e.target.id)}
                  onChange={(e) =>
                    setData((data) => ({ ...data, firstName: e.target.value }))
                  }
                  fullWidth
                  error={error.firstName && !data.firstName}
                  message='Error somewhere'
                />

                {error?.firstName && !data.firstName && (
                  <HelperText>Please enter your first name</HelperText>
                )}
              </InputStack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputStack>
                <Label htmlFor='last_name'>Last Name</Label>

                <TextField
                  id='last_name'
                  placeholder='Enter your last name'
                  value={data.lastName}
                  onFocus={(e) => setFocus(e.target.id)}
                  onChange={(e) =>
                    setData((data) => ({ ...data, lastName: e.target.value }))
                  }
                  fullWidth
                  error={error.lastName && !data.lastName}
                />

                {error?.lastName && !data.lastName && (
                  <HelperText>Please enter your last name</HelperText>
                )}
              </InputStack>
            </Grid>

            <Grid item xs={12}>
              <InputStack>
                <Label htmlFor='email'>Email</Label>

                <TextField
                  id='email'
                  placeholder='yourname@email.com'
                  value={data.email}
                  onFocus={(e) => setFocus(e.target.id)}
                  onChange={(e) =>
                    setData((data) => ({ ...data, email: e.target.value }))
                  }
                  fullWidth
                  error={error.email && !data.email}
                />

                {error?.email && !data?.email && (
                  <HelperText>Please enter your email address</HelperText>
                )}

                {data?.email &&
                  focus !== 'email' &&
                  !validateEmail(data.email) && (
                    <HelperText>Email address invalid</HelperText>
                  )}
              </InputStack>
            </Grid>

            <Grid item xs={12}>
              <InputStack>
                <Label htmlFor='message'>Message</Label>

                <TextArea
                  id='message'
                  rows={5}
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  value={data.message}
                  onFocus={(e) => setFocus(e.target.id)}
                  onChange={(e) =>
                    setData((data) => ({ ...data, message: e.target.value }))
                  }
                  fullWidth
                  error={error.message && !data.message}
                />

                {error?.message && !data.message && (
                  <HelperText>Please enter a message</HelperText>
                )}
              </InputStack>
            </Grid>

            <Grid item xs={12}>
              <CheckStack>
                <CheckBox
                  checked={data.agree}
                  onChange={(e) =>
                    setData((data) => ({ ...data, agree: !data.agree }))
                  }
                />

                <Text>
                  You agree to providing your data to {name} who may contact
                  you.
                </Text>
              </CheckStack>
            </Grid>

            <Grid item xs={12}>
              <Button disabled={!data.agree} id='btn__submit' fullWidth>
                Send message
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Container>
    </Layout>
  );
}

// init_data
const initData = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  agree: true,
};

// init_error
const initError = {
  firstName: false,
  lastName: false,
  email: false,
  emailInvalid: false,
  message: false,
};

const Container = styled(MuiContainer)(({ theme }) => ({
  padding: '156px 0',

  [theme.breakpoints.up('sm')]: {
    maxWidth: 720,
  },

  [theme.breakpoints.down('sm')]: {
    padding: '64px 0',
  },
}));

const Header = styled(Typography)({
  fontSize: 36,
  fontWeight: 600,
  lineHeight: '44px',
  letterSpacing: '-2%',
  marginBottom: 20,
});

const SubHeader = styled(Typography)({
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '30px',
  marginBottom: 48,
});

const Form = styled('form')({
  marginBottom: 32,
});

const InputStack = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

const CheckStack = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: 12,

  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
  },
}));

const Label = styled('label')({
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '20px',
  color: 'rgba(52, 64, 84, 1)',
});

const HelperText = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  color: 'rgba(248, 63, 35, 1)',
});

const Text = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  color: 'rgba(71, 84, 103, 1)',
});
