import { render } from '@testing-library/react';
import React from 'react';

import { Icon, IconProps } from './icon';

const renderIcon = (props: IconProps) => render(<Icon {...props} />);

describe('Icon component:', () => {
  it('should render Icon with given iconName prop', () => {
    const { getByTestId } = renderIcon({
      iconName: 'Add',
    });
    expect(getByTestId('AddIcon')).toBeInTheDocument();
  });
});
