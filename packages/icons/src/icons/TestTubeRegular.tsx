import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeRegularProps = Omit<IconBaseProps, 'children'>;

const TestTubeRegular = memo(
  forwardRef<SVGSVGElement, TestTubeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 2.25c.41 0 .75.34.75.75 0 .39-.3.7-.67.75h-.08c-.41 0-.75.34-.75.75V18c0 2.07-1.68 3.75-3.75 3.75S8.25 20.07 8.25 18V4.5c0-.39-.3-.7-.67-.75h-.16c-.38-.04-.67-.36-.67-.75 0-.41.34-.75.75-.75zM9.75 18c0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25V3.75h-4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeRegular.displayName = 'TestTubeRegular';

// Triple export pattern
export { TestTubeRegular, TestTubeRegular as TestTubeRegularIcon, TestTubeRegular as SiTestTubeRegular };
export default TestTubeRegular;
export type { TestTubeRegularProps };
