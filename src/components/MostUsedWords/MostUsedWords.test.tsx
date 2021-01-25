import { mockedYoutubeApi } from '__mocks__';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import youtubeApi from 'providers/youtubeApi';
import { TYoutubeApiMockedFunction } from 'types';

import App from '../../App';

jest.mock('providers/youtubeApi');

describe('MostUsedWords', () => {
  let mockedApi: TYoutubeApiMockedFunction;

  beforeEach(() => {
    mockedApi = youtubeApi as TYoutubeApiMockedFunction;
    mockedApi.mockImplementation(mockedYoutubeApi);
  });

  afterEach(() => {
    mockedApi.mockClear();
    jest.clearAllMocks();
  });

  it('should render words', async () => {
    const { getAllByRole, getByPlaceholderText, getByText, getByRole } = render(
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

    await waitFor(() => getByText('Top 5 words of results:'), {
      timeout: 4000,
    });

    expect(document.querySelectorAll('li').length).toBe(5);
  });
});
