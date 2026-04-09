import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-fill-duotone" {...props}>
      <path d="M7.88 21a.88.88 0 0 1-1.75 0V7.88h1.75zM17 3.13c.48 0 .88.39.88.87v13.13h-1.75V4c0-.48.39-.87.87-.87" opacity={0.4} />
        <path d="M21 17.13a.88.88 0 0 1 .62 1.49l-4 4a.9.9 0 0 1-1.17.06l-.07-.06-4-4a.88.88 0 0 1 .62-1.5zM7 2.13q.36 0 .62.25l4 4a.88.88 0 0 1-.62 1.5H3a.88.88 0 0 1-.62-1.5l4-4 .06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

ArrowsUpDownFillDuotone.displayName = 'ArrowsUpDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownFillDuotone, ArrowsUpDownFillDuotone as ArrowsUpDownFillDuotoneIcon, ArrowsUpDownFillDuotone as SiArrowsUpDownFillDuotone };
export default ArrowsUpDownFillDuotone;
export type { ArrowsUpDownFillDuotoneProps };
