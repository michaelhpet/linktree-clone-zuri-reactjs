import { Stack } from '@mui/material';
import Layout from '../components/Layout';
import ButtonLink from '../components/ButtonLink';
import buttonLinks from '../utils/buttonLinks';
import SocialButtonLink from '../components/SocialButtonLink';
import { MetaTags } from 'react-meta-tags';

export default function Root() {
  return (
    <Layout>
      <MetaTags>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </MetaTags>
      <Stack spacing={3} mb={8}>
        {buttonLinks.map((link) => (
          <ButtonLink
            key={link.id}
            id={link.id}
            href={link.href}
            label={link.label}
            {...(link.title && { title: link.title })}
          />
        ))}
        <SocialButtonLink />
      </Stack>
    </Layout>
  );
}
