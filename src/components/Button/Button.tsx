import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';

export default function Button(props: MUIButtonProps): JSX.Element {
  return <MUIButton {...props}>{props.children}</MUIButton>;
}
