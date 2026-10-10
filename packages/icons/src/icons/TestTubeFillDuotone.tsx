import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 3.88c-.35 0-.62.27-.62.62v14c0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38v-14c0-.35-.28-.62-.63-.62z" opacity={.4} />
        <path d="M16 2.13c.48 0 .88.39.88.87s-.4.88-.88.88H8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

TestTubeFillDuotone.displayName = 'TestTubeFillDuotone';

// Triple export pattern
export { TestTubeFillDuotone, TestTubeFillDuotone as TestTubeFillDuotoneIcon, TestTubeFillDuotone as SiTestTubeFillDuotone };
export default TestTubeFillDuotone;
export type { TestTubeFillDuotoneProps };
