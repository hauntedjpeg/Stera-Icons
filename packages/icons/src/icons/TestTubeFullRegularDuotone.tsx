import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullRegularDuotone = memo(
  forwardRef<SVGSVGElement, TestTubeFullRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.5 3.75c-.41 0-.75.34-.75.75V18c0 2.07-1.68 3.75-3.75 3.75S8.25 20.07 8.25 18V4.5c0-.41-.34-.75-.75-.75h2.25V18c0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25V3.75z" opacity={.4} />
        <path d="M14.25 10.02c-1.47.4-3.03.4-4.5 0V8.46c1.46.48 3.04.48 4.5 0zM16.5 2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TestTubeFullRegularDuotone.displayName = 'TestTubeFullRegularDuotone';

// Triple export pattern
export { TestTubeFullRegularDuotone, TestTubeFullRegularDuotone as TestTubeFullRegularDuotoneIcon, TestTubeFullRegularDuotone as SiTestTubeFullRegularDuotone };
export default TestTubeFullRegularDuotone;
export type { TestTubeFullRegularDuotoneProps };
