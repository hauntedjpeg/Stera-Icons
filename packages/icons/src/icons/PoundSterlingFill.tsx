import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingFillProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingFill = memo(
  forwardRef<SVGSVGElement, PoundSterlingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.95 2.31c2.48-.34 5.33.71 7.1 3.47.37.58.2 1.36-.38 1.73s-1.35.2-1.72-.38C15.7 5.21 13.82 4.58 12.3 4.8 10.76 5 9.75 6 9.75 7.39v3.86H14c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.75v3c0 1-.4 1.84-.93 2.5H19c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5c-.6 0-1.11-.42-1.23-1.01s.2-1.18.76-1.4h.02l.09-.04.34-.17c.28-.15.66-.36 1.03-.63q1.23-.92 1.24-1.75v-3H5c-.7 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h2.25V7.39c0-2.93 2.24-4.73 4.7-5.08" />
    </IconBase>
  ))
);

PoundSterlingFill.displayName = 'PoundSterlingFill';

// Triple export pattern
export { PoundSterlingFill, PoundSterlingFill as PoundSterlingFillIcon, PoundSterlingFill as SiPoundSterlingFill };
export default PoundSterlingFill;
export type { PoundSterlingFillProps };
