import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullFillDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 3.88c-.35 0-.62.27-.62.62v14c0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38v-14c0-.35-.28-.62-.63-.62zm-5 4.75q-.36 0-.62.25-.25.26-.26.62v9c0 1.04.84 1.88 1.88 1.88s1.88-.84 1.88-1.88v-9c0-.48-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M13 8.63c.48 0 .87.39.88.87v9c0 1.04-.84 1.88-1.88 1.88s-1.87-.84-1.87-1.88v-9q0-.36.25-.62.26-.25.62-.26zM16 2.13c.48 0 .88.39.88.87s-.4.88-.88.88H8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

TestTubeFullFillDuotone.displayName = 'TestTubeFullFillDuotone';

// Triple export pattern
export { TestTubeFullFillDuotone, TestTubeFullFillDuotone as TestTubeFullFillDuotoneIcon, TestTubeFullFillDuotone as SiTestTubeFullFillDuotone };
export default TestTubeFullFillDuotone;
export type { TestTubeFullFillDuotoneProps };
