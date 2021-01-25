import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../../App';

describe('WeekTable', () => {
  it('should render search bar when fill all inputs', async () => {
    const { getAllByRole, getByPlaceholderText } = render(<App />);

    getAllByRole('textbox').forEach((input) => {
      userEvent.type(input, '90');
      fireEvent.blur(input);
    });

    expect(getByPlaceholderText('Type your term here')).toBeDefined();
  });
});
