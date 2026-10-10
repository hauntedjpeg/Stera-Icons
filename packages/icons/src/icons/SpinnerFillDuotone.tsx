import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerFillDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.66 15.57c.49-.48 1.28-.48 1.77 0 .48.5.48 1.28 0 1.77l-1.91 1.91c-.5.49-1.28.49-1.77 0s-.49-1.28 0-1.77zM15.57 15.57c.49-.48 1.28-.48 1.77 0l1.9 1.91c.5.5.5 1.28 0 1.77-.48.49-1.28.49-1.76 0l-1.91-1.9c-.5-.5-.49-1.29 0-1.78M4.75 4.75c.49-.49 1.28-.49 1.77 0l1.9 1.91c.5.49.5 1.28 0 1.77-.48.49-1.27.49-1.76 0L4.75 6.52c-.49-.49-.49-1.28 0-1.77M17.48 4.75c.48-.49 1.28-.49 1.76 0 .5.5.5 1.28 0 1.77l-1.9 1.91c-.5.49-1.28.49-1.77 0-.5-.49-.5-1.28 0-1.77z" opacity={0.4} />
        <path d="M12 17.05c.69 0 1.25.56 1.25 1.25V21c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.7c0-.7.56-1.25 1.25-1.25M5.7 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-2.7c-.7 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM12 1.75c.69 0 1.25.56 1.25 1.25v2.7c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25V3c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

SpinnerFillDuotone.displayName = 'SpinnerFillDuotone';

// Triple export pattern
export { SpinnerFillDuotone, SpinnerFillDuotone as SpinnerFillDuotoneIcon, SpinnerFillDuotone as SiSpinnerFillDuotone };
export default SpinnerFillDuotone;
export type { SpinnerFillDuotoneProps };
