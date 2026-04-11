import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 17.13h-1.76V6.88h1.76z" opacity={.4} />
        <path d="M16 17.13a.88.88 0 0 1 .62 1.49l-4 4a.9.9 0 0 1-1.17.06l-.07-.06-4-4a.88.88 0 0 1 .62-1.5zM12 1.13q.36 0 .62.25l4 4a.88.88 0 0 1-.62 1.5H8a.88.88 0 0 1-.62-1.5l4-4 .06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

ArrowUpDownFillDuotone.displayName = 'ArrowUpDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpDownFillDuotone, ArrowUpDownFillDuotone as ArrowUpDownFillDuotoneIcon, ArrowUpDownFillDuotone as SiArrowUpDownFillDuotone };
export default ArrowUpDownFillDuotone;
export type { ArrowUpDownFillDuotoneProps };
