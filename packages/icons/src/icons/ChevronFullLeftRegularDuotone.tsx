import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m15.74 4.87.01.13v14l-.01.13c.04-.23-.03-.48-.21-.66l-1.28-1.28V6.8l1.28-1.28c.18-.18.25-.43.2-.66" opacity={.4} />
        <path d="M14.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L9.06 12l6.47 6.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7q-.21-.22-.22-.53 0-.31.22-.53z" />
    </IconBase>
  ))
);

ChevronFullLeftRegularDuotone.displayName = 'ChevronFullLeftRegularDuotone';

// Triple export pattern
export { ChevronFullLeftRegularDuotone, ChevronFullLeftRegularDuotone as ChevronFullLeftRegularDuotoneIcon, ChevronFullLeftRegularDuotone as SiChevronFullLeftRegularDuotone };
export default ChevronFullLeftRegularDuotone;
export type { ChevronFullLeftRegularDuotoneProps };
