import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { BtnProps, Button } from './button';

const mockDefaultProps: BtnProps = {
  leftIcon: 'Add',
  label: 'Mock Label',
};

const renderButton = (props = mockDefaultProps) =>
  render(<Button {...props} />);

describe('Button component:', () => {
  it('should render Button with default props', () => {
    const { getByTestId, getByText } = renderButton();
    expect(getByTestId('btn')).toBeInTheDocument();
    expect(getByTestId('AddIcon')).toBeInTheDocument();
    expect(getByText('Mock Label')).toBeInTheDocument();
  });

  it('should render Button in disabled mode', () => {
    const { getByTestId } = renderButton({
      ...mockDefaultProps,
      leftIcon: 'Alarm',
      disabled: true,
    });
    expect(getByTestId('btn')).toHaveAttribute('disabled');
    expect(getByTestId('AlarmIcon')).toBeInTheDocument();
  });

  it('should navigate to href link when Button is clicked', () => {
    const { getByTestId } = renderButton({
      ...mockDefaultProps,
      href: 'mockUrl.com',
    });
    expect(getByTestId('btn')).toHaveAttribute('href', 'mockUrl.com');
  });

  it('should call onclick function when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = renderButton({
      ...mockDefaultProps,
      onClick: mockOnClick,
    });
    fireEvent.click(getByTestId('btn'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
