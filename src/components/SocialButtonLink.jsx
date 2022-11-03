import { Stack, styled } from '@mui/material';
import iconLinks from '../utils/iconLinks';

export default function SocialButtonLink() {
  return (
    <Button>
      {iconLinks.map((Itm) => (
        <IconLink
          key={Itm.id}
          href={Itm.href}
          {...(Itm.href !== '#' && { target: '_blank', rel: 'noreferrer' })}>
          <Itm.icon />
        </IconLink>
      ))}
    </Button>
  );
}

const Button = styled(Stack)(({ theme }) => ({
  // container
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  padding: `${theme.spacing(3)} ${theme.spacing(4)}`,

  // background
  borderRadius: theme.spacing(1),
  background: 'rgba(255, 255, 255, 1)',

  '&:hover': {
    background: 'rgba(242, 244, 247, 1)',
    borderColor: 'rgba(242, 244, 247, 1)',
  },

  '&:active': {
    borderColor: 'rgba(152, 162, 179, 1)',
    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
  },
}));

const IconLink = styled('a')({
  height: 24,
  textDecoration: 'none',

  '& .MuiSvgIcon-root': {
    width: 24,
    height: 24,
  },
});
