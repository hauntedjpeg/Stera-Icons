import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 4c-.28 0-.5.22-.5.5V18c0 2.2-1.8 4-4 4s-4-1.8-4-4V4.5c0-.28-.22-.5-.5-.5H10v14c0 1.1.9 2 2 2s2-.9 2-2V4z" opacity={.4} />
        <path d="M16.5 2c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TestTubeBoldDuotone.displayName = 'TestTubeBoldDuotone';

// Triple export pattern
export { TestTubeBoldDuotone, TestTubeBoldDuotone as TestTubeBoldDuotoneIcon, TestTubeBoldDuotone as SiTestTubeBoldDuotone };
export default TestTubeBoldDuotone;
export type { TestTubeBoldDuotoneProps };
