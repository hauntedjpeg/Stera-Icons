import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.13 16.89 9.23 12l4.9-4.89z" opacity={.4} />
        <path fillRule="evenodd" d="M14.38 4.38c.25-.25.63-.32.96-.19.32.14.53.46.54.81v14c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-7-7q-.25-.27-.25-.62 0-.36.25-.62zM9.24 12l4.89 4.89V7.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullLeftFillDuotone.displayName = 'ChevronFullLeftFillDuotone';

// Triple export pattern
export { ChevronFullLeftFillDuotone, ChevronFullLeftFillDuotone as ChevronFullLeftFillDuotoneIcon, ChevronFullLeftFillDuotone as SiChevronFullLeftFillDuotone };
export default ChevronFullLeftFillDuotone;
export type { ChevronFullLeftFillDuotoneProps };
