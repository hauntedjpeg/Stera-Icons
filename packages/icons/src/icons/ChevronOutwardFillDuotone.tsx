import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronOutwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 1.38c.34-.34.9-.34 1.24 0l6 6c.25.25.32.63.19.95-.14.33-.46.54-.81.54H6c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95z" />
        <path d="M18 15.13c.35 0 .67.2.8.53.14.33.07.7-.18.96l-6 6c-.34.34-.9.34-1.24 0l-6-6c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54z" opacity={.4} />
    </IconBase>
  ))
);

ChevronOutwardFillDuotone.displayName = 'ChevronOutwardFillDuotone';

// Triple export pattern
export { ChevronOutwardFillDuotone, ChevronOutwardFillDuotone as ChevronOutwardFillDuotoneIcon, ChevronOutwardFillDuotone as SiChevronOutwardFillDuotone };
export default ChevronOutwardFillDuotone;
export type { ChevronOutwardFillDuotoneProps };
