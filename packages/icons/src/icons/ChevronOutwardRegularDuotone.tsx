import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronOutwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.47 1.47c.3-.3.77-.3 1.06 0l6 6c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 3.06 6.53 8.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
        <path d="M17.47 15.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-6 6c-.3.3-.77.3-1.06 0l-6-6c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 20.94z" opacity={.4} />
    </IconBase>
  ))
);

ChevronOutwardRegularDuotone.displayName = 'ChevronOutwardRegularDuotone';

// Triple export pattern
export { ChevronOutwardRegularDuotone, ChevronOutwardRegularDuotone as ChevronOutwardRegularDuotoneIcon, ChevronOutwardRegularDuotone as SiChevronOutwardRegularDuotone };
export default ChevronOutwardRegularDuotone;
export type { ChevronOutwardRegularDuotoneProps };
