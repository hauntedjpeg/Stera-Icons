import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullFillProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullFill = memo(
  forwardRef<SVGSVGElement, TestTubeFullFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-fill" {...props}>
      <path fillRule="evenodd" d="M16 2.13a.88.88 0 0 1 .09 1.74H16a.6.6 0 0 0-.62.63v14a3.37 3.37 0 1 1-6.76 0v-14A.6.6 0 0 0 8 3.88a.87.87 0 1 1 0-1.75zm-5.62 6.25c1.06.3 2.18.3 3.24 0v-4.5h-3.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeFullFill.displayName = 'TestTubeFullFill';

// Triple export pattern (lucide-react style)
export { TestTubeFullFill, TestTubeFullFill as TestTubeFullFillIcon, TestTubeFullFill as SiTestTubeFullFill };
export default TestTubeFullFill;
export type { TestTubeFullFillProps };
