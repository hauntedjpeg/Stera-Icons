import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-fill-duotone" {...props}>
      <path d="M16 3.88a.6.6 0 0 0-.62.62v14a3.37 3.37 0 1 1-6.76 0v-14A.6.6 0 0 0 8 3.88z" opacity={.4} />
        <path d="M16 2.13a.88.88 0 0 1 0 1.75H8a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

TestTubeFillDuotone.displayName = 'TestTubeFillDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFillDuotone, TestTubeFillDuotone as TestTubeFillDuotoneIcon, TestTubeFillDuotone as SiTestTubeFillDuotone };
export default TestTubeFillDuotone;
export type { TestTubeFillDuotoneProps };
