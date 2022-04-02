import React from 'react';
import { Button as MUIButton } from '@material-ui/core';

interface Props {
  children: any;
}

export default function Button({ children }: Props): JSX.Element {
  return <MUIButton variant="contained">{children}</MUIButton>;
}
