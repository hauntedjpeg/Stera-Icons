import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 4.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L14.94 12 8.47 5.53c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ChevronRightRegular.displayName = 'ChevronRightRegular';

// Triple export pattern
export { ChevronRightRegular, ChevronRightRegular as ChevronRightRegularIcon, ChevronRightRegular as SiChevronRightRegular };
export default ChevronRightRegular;
export type { ChevronRightRegularProps };
