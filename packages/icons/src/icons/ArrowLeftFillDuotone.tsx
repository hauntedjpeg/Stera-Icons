import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-7.12v-1.76z" opacity={.4} />
        <path d="M10.38 5.38c.25-.25.63-.32.96-.19.32.14.53.46.54.81v12c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-6-6q-.25-.27-.25-.62 0-.36.25-.62z" />
    </IconBase>
  ))
);

ArrowLeftFillDuotone.displayName = 'ArrowLeftFillDuotone';

// Triple export pattern
export { ArrowLeftFillDuotone, ArrowLeftFillDuotone as ArrowLeftFillDuotoneIcon, ArrowLeftFillDuotone as SiArrowLeftFillDuotone };
export default ArrowLeftFillDuotone;
export type { ArrowLeftFillDuotoneProps };
