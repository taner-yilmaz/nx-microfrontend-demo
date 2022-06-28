import { render } from '@testing-library/react';

import CommonLib from './common-lib';

describe('CommonLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonLib />);
    expect(baseElement).toBeTruthy();
  });
});
