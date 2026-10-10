import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeRegularDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 3.75c-.41 0-.75.34-.75.75V18c0 2.07-1.68 3.75-3.75 3.75S8.25 20.07 8.25 18V4.5c0-.41-.34-.75-.75-.75h2.25V18c0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25V3.75z" opacity={.4} />
        <path d="M16.5 2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TestTubeRegularDuotone.displayName = 'TestTubeRegularDuotone';

// Triple export pattern
export { TestTubeRegularDuotone, TestTubeRegularDuotone as TestTubeRegularDuotoneIcon, TestTubeRegularDuotone as SiTestTubeRegularDuotone };
export default TestTubeRegularDuotone;
export type { TestTubeRegularDuotoneProps };
