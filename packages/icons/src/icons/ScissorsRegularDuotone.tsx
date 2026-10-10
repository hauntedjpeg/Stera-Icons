import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScissorsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.73 13.14c.26-.32.74-.37 1.06-.11l6.68 5.39c.32.26.37.73.11 1.05s-.73.37-1.05.11l-6.68-5.39c-.33-.26-.38-.73-.12-1.05" opacity={0.4} />
        <path fillRule="evenodd" d="M5.5 3.25c1.8 0 3.25 1.46 3.25 3.25q0 .76-.32 1.4l2.37 1.91c.32.26.37.73.11 1.06-.25.32-.73.37-1.05.11L7.49 9.07c-.55.42-1.24.68-1.99.68-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M20.53 4.42c.32-.26.8-.21 1.05.1.26.33.21.8-.1 1.06L8.42 16.1q.31.64.32 1.4c0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25.75 0 1.44.26 1.99.68zM5.5 15.75c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

ScissorsRegularDuotone.displayName = 'ScissorsRegularDuotone';

// Triple export pattern
export { ScissorsRegularDuotone, ScissorsRegularDuotone as ScissorsRegularDuotoneIcon, ScissorsRegularDuotone as SiScissorsRegularDuotone };
export default ScissorsRegularDuotone;
export type { ScissorsRegularDuotoneProps };
