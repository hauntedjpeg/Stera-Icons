import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 17.13h-1.76V6.88h1.76z" opacity={.4} />
        <path d="M16 17.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-4 4c-.32.32-.83.34-1.17.06l-.07-.06-4-4c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54zM12 1.13q.36 0 .62.25l4 4c.25.25.32.63.19.95-.14.33-.46.54-.81.54H8c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95l4-4 .06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

ArrowUpDownFillDuotone.displayName = 'ArrowUpDownFillDuotone';

// Triple export pattern
export { ArrowUpDownFillDuotone, ArrowUpDownFillDuotone as ArrowUpDownFillDuotoneIcon, ArrowUpDownFillDuotone as SiArrowUpDownFillDuotone };
export default ArrowUpDownFillDuotone;
export type { ArrowUpDownFillDuotoneProps };
