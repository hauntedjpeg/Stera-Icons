import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TestTubeBoldProps = Omit<IconBaseProps, 'children'>;

const TestTubeBold = memo(
  forwardRef<SVGSVGElement, TestTubeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 2c.55 0 1 .45 1 1 0 .52-.4.94-.9 1h-.1c-.28 0-.5.22-.5.5V18c0 2.2-1.8 4-4 4s-4-1.8-4-4V4.5c0-.28-.22-.5-.5-.5h-.1c-.5-.06-.9-.48-.9-1 0-.55.45-1 1-1zM10 18c0 1.1.9 2 2 2s2-.9 2-2V4h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeBold.displayName = 'TestTubeBold';

// Triple export pattern
export { TestTubeBold, TestTubeBold as TestTubeBoldIcon, TestTubeBold as SiTestTubeBold };
export default TestTubeBold;
export type { TestTubeBoldProps };
