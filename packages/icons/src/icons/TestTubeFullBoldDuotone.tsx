import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullBoldDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 4c-.28 0-.5.22-.5.5V18c0 2.2-1.8 4-4 4s-4-1.8-4-4V4.5c0-.28-.22-.5-.5-.5H10v14c0 1.1.9 2 2 2s2-.9 2-2V4z" opacity={.4} />
        <path d="M14 10.22c-1.31.35-2.69.35-4 0v-2.1c1.29.48 2.71.48 4 0zM16.5 2c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TestTubeFullBoldDuotone.displayName = 'TestTubeFullBoldDuotone';

// Triple export pattern
export { TestTubeFullBoldDuotone, TestTubeFullBoldDuotone as TestTubeFullBoldDuotoneIcon, TestTubeFullBoldDuotone as SiTestTubeFullBoldDuotone };
export default TestTubeFullBoldDuotone;
export type { TestTubeFullBoldDuotoneProps };
