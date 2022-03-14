import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('App Component', () => {
  it('Should render app component correctly if user type a value without matches "No matches found" is displayed', () => {
    render(<App />);
    const inputEl = screen.getByTestId("h-input");
    userEvent.type(inputEl, "10");
    const result = screen.getByText(/No matches found/i);
    expect(result).toBeInTheDocument();
  });
});
