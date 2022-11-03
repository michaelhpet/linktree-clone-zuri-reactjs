import { Grid, styled, Typography } from '@mui/material';
import { Container as MuiContainer } from '@mui/system';
import { useState } from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Layout from '../components/Layout';
import TextArea from '../components/TextArea';
import TextField from '../components/TextField';

export default function Contact() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agree: false,
  });

  const submit = (e) => {
    e.preventDefault();

    console.log(data);
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
                  onChange={(e) =>
                    setData((data) => ({ ...data, firstName: e.target.value }))
                  }
                  fullWidth
                  error
                  message='Error somewhere'
                />
              </InputStack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputStack>
                <Label htmlFor='last_name'>Last Name</Label>
                <TextField
                  id='last_name'
                  placeholder='Enter your last name'
                  value={data.lastName}
                  onChange={(e) =>
                    setData((data) => ({ ...data, lastName: e.target.value }))
                  }
                  fullWidth
                  error
                  message='Error somewhere'
                />
              </InputStack>
            </Grid>

            <Grid item xs={12}>
              <InputStack>
                <Label htmlFor='email'>Email</Label>
                <TextField
                  id='email'
                  placeholder='yourname@email.com'
                  value={data.email}
                  onChange={(e) =>
                    setData((data) => ({ ...data, email: e.target.value }))
                  }
                  fullWidth
                  error
                  message='Error somewhere'
                />
              </InputStack>
            </Grid>

            <Grid item xs={12}>
              <InputStack>
                <Label htmlFor='message'>Message</Label>
                <TextArea
                  id='message'
                  minRows={5}
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  value={data.message}
                  onChange={(e) =>
                    setData((data) => ({ ...data, message: e.target.value }))
                  }
                  fullWidth
                />
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
                  You agree to providing your data to Michael Peter who may
                  contact you.
                </Text>
              </CheckStack>
            </Grid>

            <Grid item xs={12}>
              <Button id='btn__submit' fullWidth>
                Send message
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Container>
    </Layout>
  );
}

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

const CheckStack = styled('div')({
  display: 'flex',
  alignItem: 'center',
  gap: 12,
});

const Label = styled('label')({
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '20px',
  color: 'rgba(52, 64, 84, 1)',
});

const Text = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  color: 'rgba(71, 84, 103, 1)',
});
