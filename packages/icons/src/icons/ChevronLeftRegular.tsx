import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftRegular = memo(
  forwardRef<SVGSVGElement, ChevronLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L9.06 12l6.47 6.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7q-.21-.22-.22-.53 0-.31.22-.53z" />
    </IconBase>
  ))
);

ChevronLeftRegular.displayName = 'ChevronLeftRegular';

// Triple export pattern
export { ChevronLeftRegular, ChevronLeftRegular as ChevronLeftRegularIcon, ChevronLeftRegular as SiChevronLeftRegular };
export default ChevronLeftRegular;
export type { ChevronLeftRegularProps };
