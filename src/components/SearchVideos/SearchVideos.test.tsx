import { mockedYoutubeApi } from '__mocks__';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import youtubeApi from 'providers/youtubeApi';
import { TYoutubeApiMockedFunction } from 'types';

import App from '../../App';

jest.mock('providers/youtubeApi');

describe('SearchVideos', () => {
  let mockedApi: TYoutubeApiMockedFunction;

  beforeEach(() => {
    mockedApi = youtubeApi as TYoutubeApiMockedFunction;
    mockedApi.mockImplementation(mockedYoutubeApi);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call api', async () => {
    const { getAllByRole, getByPlaceholderText, getByRole } = render(<App />);

    getAllByRole('textbox').forEach((input) => {
      userEvent.type(input, '90');

      act(() => {
        fireEvent.blur(input);
      });
    });

    userEvent.type(getByPlaceholderText('Type your term here'), 'fox');

    act(() => {
      userEvent.click(getByRole('button'));
    });

    await waitFor(() => expect(mockedApi).toBeCalled());
  });

  it('should trigger state to show days to watch', async () => {
    const { getAllByRole, getByPlaceholderText, getByRole, getByText } = render(
      <App />,
    );

    getAllByRole('textbox').forEach((input) => {
      userEvent.type(input, '90');
      fireEvent.blur(input);
    });

    userEvent.type(getByPlaceholderText('Type your term here'), 'fox');

    act(() => {
      userEvent.click(getByRole('button'));
    });

    await waitFor(
      () =>
        expect(getByText(/You will spend [\d] days to watch/)).toBeDefined(),
      {
        timeout: 5000,
      },
    );
  });

  it('should show toast when no video found', async () => {
    const { getAllByRole, getByPlaceholderText, getByRole } = render(<App />);

    getAllByRole('textbox').forEach((input) => {
      userEvent.type(input, '90');
      act(() => {
        fireEvent.blur(input);
      });
    });

    userEvent.type(getByPlaceholderText('Type your term here'), 'aah18jvola');

    act(() => {
      userEvent.click(getByRole('button'));
    });

    await waitFor(() =>
      expect(document.querySelector('.Toastify')).toBeDefined(),
    );
  });
});
