import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullRegularProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullRegular = memo(
  forwardRef<SVGSVGElement, TestTubeFullRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 2.25c.41 0 .75.34.75.75 0 .39-.3.7-.67.75h-.16c-.38.04-.67.36-.67.75V18c0 2.07-1.68 3.75-3.75 3.75S8.25 20.07 8.25 18V4.5c0-.39-.3-.7-.67-.75h-.16c-.38-.04-.67-.36-.67-.75 0-.41.34-.75.75-.75zm-2.25 7.63c-1.46.46-3.04.46-4.5 0V18c0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25zm-4.5-1.5.03-.08c1.42.57 3.02.57 4.44 0l.03.07V3.75h-4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeFullRegular.displayName = 'TestTubeFullRegular';

// Triple export pattern
export { TestTubeFullRegular, TestTubeFullRegular as TestTubeFullRegularIcon, TestTubeFullRegular as SiTestTubeFullRegular };
export default TestTubeFullRegular;
export type { TestTubeFullRegularProps };
