import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    render(
      <Button>
        <></>
      </Button>
    );
  });
});
