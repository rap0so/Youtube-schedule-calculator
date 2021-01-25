import { mockedYoutubeApi } from '__mocks__';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import youtubeApi from 'providers/youtubeApi';
import { TYoutubeApiMockedFunction } from 'types';

import App from '../../App';

jest.mock('providers/youtubeApi');

describe('Videos', () => {
  beforeEach(() => {
    const mockedApi = youtubeApi as TYoutubeApiMockedFunction;
    mockedApi.mockImplementation(mockedYoutubeApi);
  });

  it('should render videos', async () => {
    const { getAllByRole, getByPlaceholderText, getByRole } = render(<App />);

    getAllByRole('textbox').forEach((input) => {
      userEvent.type(input, '90');
      fireEvent.blur(input);
    });

    userEvent.type(getByPlaceholderText('Type your term here'), 'fox');

    act(() => {
      userEvent.click(getByRole('button'));
    });

    await waitFor(() => document.querySelector('[data-test=video-box]'));
  });
});
