import { styled } from '@mui/material';
import CheckIcon from '../icons/CheckIcon';

export default function CheckBox(props) {
  return (
    <Root onClick={props?.onChange}>
      <DummyInput type='checkbox' {...props} />
      <StyledInput />
      <Check>
        <CheckIcon />
      </Check>
    </Root>
  );
}

const Root = styled('div')({
  position: 'relative',
  width: 20,
  height: 20,
  cursor: 'pointer',

  '&:hover input ~ div': {
    border: '1px solid rgba(132, 202, 255, 1)',
    boxShadow: '0 0 0 4px rgba(209, 233, 255, 1)',
  },

  'input:checked ~ div': {
    border: '1px solid rgba(21, 112, 239, 1)',
  },

  'input:checked ~ span': {
    display: 'flex',
  },
});

const DummyInput = styled('input')({
  opacity: 0,
});

const StyledInput = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 20,
  height: 20,
  borderRadius: 6,
  border: '1px solid rgba(208, 213, 221, 1)',
  cursor: 'pointer',
});

const Check = styled('span')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 20,
  height: 20,
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  '& .MuiSvgIcon-root': {
    width: 9.88,
    height: 6.97,
    color: 'transparent',
  },
});
