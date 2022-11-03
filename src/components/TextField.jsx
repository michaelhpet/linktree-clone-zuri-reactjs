import { styled } from '@mui/material';

export default function TextField(props) {
  return <Input {...props} />;
}

const propKeys = ['error', 'fullWidth'];

const Input = styled('input', {
  shouldForwardProp: (prop) => !propKeys.includes(prop),
})((props) => ({
  position: 'relative',
  fontFamily: 'inherit',
  fontSize: 16,
  fontWeight: 400,
  borderRadius: 8,
  padding: '10px 14px',
  border: `1px solid rgba(${
    props?.error ? '248, 150, 135, 1' : '208, 213, 221, 1'
  })`,
  boxShadow: `0 1px 2px rgba(${
    props?.error ? '248, 150, 135, 1' : '16, 24, 40, 0.05'
  })`,

  '&:focus': {
    outline: `1px solid rgba(${
      props?.error ? '248, 150, 135, 1' : '132, 202, 255, 1'
    })`,
    boxShadow: `0 1px 2px rgba(${
      props?.error ? '248, 150, 135, 1' : '132, 202, 255, 1'
    })`,
  },

  '&::placeholder': {
    color: 'rgba(102, 112, 133, 1)',
  },

  ...(props?.fullWidth && {
    display: 'block',
    width: '100%',
  }),
}));
