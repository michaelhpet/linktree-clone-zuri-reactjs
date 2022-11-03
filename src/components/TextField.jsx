import { styled } from '@mui/material';

export default function TextField(props) {
  return <Input {...props} />;
}

// const propKeys = ['error', 'helperText', 'fullWidth'];

const Input = styled('input', {
  // shouldForwardProp: (prop) => !propKeys.includes(prop),
})((props) => ({
  position: 'relative',
  fontFamily: 'inherit',
  fontSize: 16,
  fontWeight: 400,
  borderRadius: 8,
  padding: '10px 14px',
  border: '1px solid rgba(208, 213, 221, 1)',
  boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',

  '&:focus': {
    outline: '1px solid rgba(132, 202, 255, 1)',
    boxShadow: '0 1px 2px rgba(132, 202, 255, 1)',
  },

  '&::placeholder': {
    color: 'rgba(102, 112, 133, 1)',
  },

  ...(props?.fullWidth && {
    display: 'block',
    width: '100%',
  }),

  ...(props?.error &&
    props?.message && {
      '&:after': {
        display: 'block',
        content: `"${props.message}"`,
        marginTop: 6,
        fontSize: 43,
        fontWeight: 500,
        lineHeight: '20px',

        color: 'rgba(248, 63, 35, 1)',
      },
    }),
}));
