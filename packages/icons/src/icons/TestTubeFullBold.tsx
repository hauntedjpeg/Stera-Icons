import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeFullBoldProps = Omit<IconBaseProps, 'children'>;

const TestTubeFullBold = memo(
  forwardRef<SVGSVGElement, TestTubeFullBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 2c.55 0 1 .45 1 1 0 .52-.4.94-.9 1h-.1c-.28 0-.5.22-.5.5V18c0 2.2-1.8 4-4 4s-4-1.8-4-4V4.5c0-.28-.22-.5-.5-.5-.55 0-1-.45-1-1s.45-1 1-1zM14 10.22c-1.31.35-2.69.35-4 0V18c0 1.1.9 2 2 2s2-.9 2-2zm-4-2.1c1.29.48 2.71.48 4 0V4h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeFullBold.displayName = 'TestTubeFullBold';

// Triple export pattern
export { TestTubeFullBold, TestTubeFullBold as TestTubeFullBoldIcon, TestTubeFullBold as SiTestTubeFullBold };
export default TestTubeFullBold;
export type { TestTubeFullBoldProps };
