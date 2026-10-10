import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsFillDuotone = memo(
  forwardRef<SVGSVGElement, StairsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.25 16.5c0 .69.56 1.25 1.25 1.25h1.25v3.75c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25zM9.25 10.5c0 .69.56 1.25 1.25 1.25h1.25v4.75c0-.69-.56-1.25-1.25-1.25H9.25zM15.25 4.5c0 .69.56 1.25 1.25 1.25h1.25v4.75c0-.69-.56-1.25-1.25-1.25h-1.25z" opacity={0.4} />
        <path d="M10.5 15.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-6c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM16.5 9.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-6c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21.5 3.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

StairsFillDuotone.displayName = 'StairsFillDuotone';

// Triple export pattern
export { StairsFillDuotone, StairsFillDuotone as StairsFillDuotoneIcon, StairsFillDuotone as SiStairsFillDuotone };
export default StairsFillDuotone;
export type { StairsFillDuotoneProps };
