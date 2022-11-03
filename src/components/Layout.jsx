import { Container } from '@mui/material';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout(props) {
  return (
    <Container>
      {!props?.noNav ? <NavBar /> : null}
      {props.children}
      <Footer />
    </Container>
  );
}
