import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingFillProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingFill = memo(
  forwardRef<SVGSVGElement, PoundSterlingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-fill" {...props}>
      <path d="M11.95 2.31a7.3 7.3 0 0 1 7.1 3.47 1.25 1.25 0 0 1-2.1 1.35A4.8 4.8 0 0 0 12.3 4.8C10.76 5 9.75 6 9.75 7.39v3.86H14a1.25 1.25 0 0 1 0 2.5H9.75v3a4 4 0 0 1-.93 2.5H19a1.25 1.25 0 0 1 0 2.5H5a1.25 1.25 0 0 1-.47-2.41h.02l.43-.2c.28-.16.66-.37 1.03-.64q1.23-.92 1.24-1.75v-3H5a1.25 1.25 0 0 1 0-2.5h2.25V7.39c0-2.93 2.24-4.73 4.7-5.08" />
    </IconBase>
  ))
);

PoundSterlingFill.displayName = 'PoundSterlingFill';

// Triple export pattern (lucide-react style)
export { PoundSterlingFill, PoundSterlingFill as PoundSterlingFillIcon, PoundSterlingFill as SiPoundSterlingFill };
export default PoundSterlingFill;
export type { PoundSterlingFillProps };
