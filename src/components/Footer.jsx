import { Grid, styled, Typography } from '@mui/material';
import zuriImage from '../images/zuri.png';
import i4gImage from '../images/i4g.png';

export default function Footer() {
  return (
    <Wrapper>
      <Grid container spacing={3}>
        <GridItem xs={12} md={4}>
          <ZuriWrapper>
            <img
              src={zuriImage}
              alt='Zuri Internship'
              layout='fill'
              objectFit='cover'
            />
          </ZuriWrapper>
        </GridItem>

        <GridItem xs={12} md={4}>
          <Text>HNG Internship 9 Frontend Task</Text>
        </GridItem>

        <GridItem xs={12} md={4}>
          <I4gWrapper>
            <img
              src={i4gImage}
              alt='Ingressive for Good'
              layout='fill'
              objectFit='cover'
            />
          </I4gWrapper>
        </GridItem>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled('footer')(({ theme }) => ({
  paddingTop: 48,
  paddingBottom: 48,
  borderTop: '1.5px Solid rgba(0, 0, 0, 0.1)',

  [theme.breakpoints.down('sm')]: {
    paddingBottom: 32,
  },
}));

const GridItem = styled((props) => <Grid item {...props} />)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',

  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
}));

const Text = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'center',
});

const ZuriWrapper = styled('div')({
  position: 'relative',
  width: '185.03px',
  height: '32px',
});

const I4gWrapper = styled('div')({
  position: 'relative',
  width: '132.13px',
  height: '32px',
});
