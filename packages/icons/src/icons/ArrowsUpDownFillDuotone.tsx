import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 21c0 .48-.4.88-.88.88s-.87-.4-.87-.88V7.88h1.75zM17 3.13c.48 0 .88.39.88.87v13.13h-1.75V4c0-.48.39-.87.87-.87" opacity={0.4} />
        <path d="M21 17.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-4 4c-.32.32-.83.34-1.17.06l-.07-.06-4-4c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54zM7 2.13q.36 0 .62.25l4 4c.25.25.32.63.19.95-.14.33-.46.54-.81.54H3c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95l4-4 .07-.06q.24-.19.55-.2" />
    </IconBase>
  ))
);

ArrowsUpDownFillDuotone.displayName = 'ArrowsUpDownFillDuotone';

// Triple export pattern
export { ArrowsUpDownFillDuotone, ArrowsUpDownFillDuotone as ArrowsUpDownFillDuotoneIcon, ArrowsUpDownFillDuotone as SiArrowsUpDownFillDuotone };
export default ArrowsUpDownFillDuotone;
export type { ArrowsUpDownFillDuotoneProps };
