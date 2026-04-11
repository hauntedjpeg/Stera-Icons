import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFillProps = Omit<IconBaseProps, 'children'>;

const TestTubeFill = memo(
  forwardRef<SVGSVGElement, TestTubeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 2.13a.88.88 0 0 1 .09 1.74H16a.6.6 0 0 0-.62.63v14a3.37 3.37 0 1 1-6.76 0v-14A.6.6 0 0 0 8 3.88a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

TestTubeFill.displayName = 'TestTubeFill';

// Triple export pattern (lucide-react style)
export { TestTubeFill, TestTubeFill as TestTubeFillIcon, TestTubeFill as SiTestTubeFill };
export default TestTubeFill;
export type { TestTubeFillProps };
