import { styled } from '@mui/material';

export default function Button(props) {
  return <Root {...props} />;
}

const propKeys = ['fullWidth'];

const Root = styled('button', {
  shouldForwardProp: (prop) => !propKeys.includes(prop),
})((props) => ({
  padding: '12px 20px',
  borderRadius: 8,
  background: 'rgba(21, 112, 239, 1)',
  outline: 'none',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 1)',
  boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
  transition: 'background 0.2s',

  '&:hover': {
    background: 'rgba(23, 92, 211, 1)',
  },

  '&:focus': {
    border: '1px solid rgba(21, 112, 239, 1)',
    boxShadow:
      '0 0 0 4px rgba(209, 233, 255, 1), 0 1px 2px rgba(16, 24, 40, 0.05)',
  },

  ...(props?.fullWidth && {
    width: '100%',
  }),
}));
