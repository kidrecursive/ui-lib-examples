import { Button } from 'ui-lib-examples';
import {
  User as UserIcon,
  Database as DatabaseIcon,
} from 'ui-lib-examples/dist/esm/icons';
import { Box } from '@mui/material';

export default function App(): JSX.Element {
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Button
        size="large"
        variant="contained"
        startIcon={<UserIcon />}
        endIcon={<DatabaseIcon />}
      >
        HELLO WORLD
      </Button>
    </Box>
  );
}
