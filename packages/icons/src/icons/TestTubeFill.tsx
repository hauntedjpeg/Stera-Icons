import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFillProps = Omit<IconBaseProps, 'children'>;

const TestTubeFill = memo(
  forwardRef<SVGSVGElement, TestTubeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 2.13c.48 0 .88.39.88.87 0 .45-.35.83-.79.87H16c-.35 0-.62.28-.62.63v14c0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38v-14c0-.35-.28-.62-.63-.62-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

TestTubeFill.displayName = 'TestTubeFill';

// Triple export pattern
export { TestTubeFill, TestTubeFill as TestTubeFillIcon, TestTubeFill as SiTestTubeFill };
export default TestTubeFill;
export type { TestTubeFillProps };
