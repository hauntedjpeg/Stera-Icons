import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.47 15.53q.23.22.53.22H5l-.13-.01c.23.04.48-.03.66-.21l1.28-1.28H17.2z" opacity={.4} />
        <path d="M11.47 7.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 9.06l-6.47 6.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

ChevronFullUpRegularDuotone.displayName = 'ChevronFullUpRegularDuotone';

// Triple export pattern
export { ChevronFullUpRegularDuotone, ChevronFullUpRegularDuotone as ChevronFullUpRegularDuotoneIcon, ChevronFullUpRegularDuotone as SiChevronFullUpRegularDuotone };
export default ChevronFullUpRegularDuotone;
export type { ChevronFullUpRegularDuotoneProps };
