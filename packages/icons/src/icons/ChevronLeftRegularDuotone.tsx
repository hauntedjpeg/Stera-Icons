import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
        <path d="M15.53 18.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7c.3.3.77.3 1.06 0l.53-.53z" opacity={.4} />
    </IconBase>
  ))
);

ChevronLeftRegularDuotone.displayName = 'ChevronLeftRegularDuotone';

// Triple export pattern
export { ChevronLeftRegularDuotone, ChevronLeftRegularDuotone as ChevronLeftRegularDuotoneIcon, ChevronLeftRegularDuotone as SiChevronLeftRegularDuotone };
export default ChevronLeftRegularDuotone;
export type { ChevronLeftRegularDuotoneProps };
