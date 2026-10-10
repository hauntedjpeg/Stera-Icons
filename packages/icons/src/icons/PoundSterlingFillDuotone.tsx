import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingFillDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 13.75H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h2.25zM14 11.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.75v-2.5z" opacity={0.4} />
        <path d="M11.95 2.31c2.48-.34 5.33.71 7.1 3.47.37.58.2 1.36-.38 1.73s-1.35.2-1.72-.38C15.7 5.21 13.82 4.58 12.3 4.8 10.76 5 9.75 6 9.75 7.39v9.36c0 1-.4 1.84-.93 2.5H19c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5c-.6 0-1.11-.42-1.23-1.01s.2-1.18.76-1.4h.02l.09-.04.34-.17c.28-.15.66-.36 1.03-.63q1.23-.92 1.24-1.75V7.4c0-2.93 2.24-4.73 4.7-5.08" />
    </IconBase>
  ))
);

PoundSterlingFillDuotone.displayName = 'PoundSterlingFillDuotone';

// Triple export pattern
export { PoundSterlingFillDuotone, PoundSterlingFillDuotone as PoundSterlingFillDuotoneIcon, PoundSterlingFillDuotone as SiPoundSterlingFillDuotone };
export default PoundSterlingFillDuotone;
export type { PoundSterlingFillDuotoneProps };
