import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceBoldDuotone = memo(
  forwardRef<SVGSVGElement, PeaceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 4q.5 0 1 .06v7.53l5.32 5.31q-.62.8-1.42 1.42l-3.9-3.9v5.52q-.5.06-1 .06t-1-.06V14.4l-3.9 3.9q-.8-.61-1.42-1.4L11 11.58V4.06Q11.5 4 12 4" />
    </IconBase>
  ))
);

PeaceBoldDuotone.displayName = 'PeaceBoldDuotone';

// Triple export pattern
export { PeaceBoldDuotone, PeaceBoldDuotone as PeaceBoldDuotoneIcon, PeaceBoldDuotone as SiPeaceBoldDuotone };
export default PeaceBoldDuotone;
export type { PeaceBoldDuotoneProps };
