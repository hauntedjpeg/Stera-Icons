import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CarrotRegularDuotone = memo(
  forwardRef<SVGSVGElement, CarrotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.49 7.43c2.23-2.23 5.84-2.23 8.07 0s2.23 5.85 0 8.08c-1.04 1.05-3.79 2.98-6.5 4.4-1.35.71-2.75 1.32-3.96 1.63q-.92.24-1.73.2c-.54-.03-1.09-.2-1.5-.61-.41-.42-.58-.96-.61-1.5q-.04-.82.2-1.74c.3-1.2.92-2.6 1.63-3.96 1.42-2.7 3.35-5.45 4.4-6.5M15.5 8.5c-1.64-1.64-4.3-1.64-5.95 0-.7.7-1.96 2.4-3.13 4.37l1.61 1.61c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.33-1.32-.22.42c-.7 1.31-1.24 2.6-1.5 3.63q-.2.79-.17 1.27c.03.32.11.47.18.54s.22.15.54.18q.48.03 1.27-.16c1.04-.27 2.31-.82 3.63-1.51 2.2-1.15 4.36-2.63 5.55-3.6l-2.95-2.95c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.93 2.93c1.17-1.64 1.02-3.93-.46-5.4" clipRule="evenodd" />
        <path d="M16.03 2.25c.42 0 .75.34.75.75v3.15l2.23-2.23c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-2.23 2.23H21c.41 0 .75.34.75.75s-.34.75-.75.75h-3.47q-.39-.7-.97-1.28-.59-.58-1.28-.96V3c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

CarrotRegularDuotone.displayName = 'CarrotRegularDuotone';

// Triple export pattern
export { CarrotRegularDuotone, CarrotRegularDuotone as CarrotRegularDuotoneIcon, CarrotRegularDuotone as SiCarrotRegularDuotone };
export default CarrotRegularDuotone;
export type { CarrotRegularDuotoneProps };
