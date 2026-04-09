import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="test-tube-full-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M16 3.88a.6.6 0 0 0-.62.62v14a3.37 3.37 0 1 1-6.76 0v-14A.6.6 0 0 0 8 3.88zm-5 4.75a.9.9 0 0 0-.87.87v9a1.88 1.88 0 0 0 3.74 0v-9c0-.48-.39-.87-.87-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M13 8.63c.48 0 .87.39.88.87v9a1.88 1.88 0 0 1-3.76 0v-9a.9.9 0 0 1 .88-.87zM16 2.13a.88.88 0 0 1 0 1.75H8a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

TestTubeFullFillDuotone.displayName = 'TestTubeFullFillDuotone';

// Triple export pattern (lucide-react style)
export { TestTubeFullFillDuotone, TestTubeFullFillDuotone as TestTubeFullFillDuotoneIcon, TestTubeFullFillDuotone as SiTestTubeFullFillDuotone };
export default TestTubeFullFillDuotone;
export type { TestTubeFullFillDuotoneProps };
