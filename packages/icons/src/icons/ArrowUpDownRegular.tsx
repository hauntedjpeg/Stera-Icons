import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.25q.31 0 .53.22l4.5 4.5c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3.22-3.22V20.2l3.22-3.22c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.5 4.5q-.22.22-.53.22-.23 0-.42-.13l-.11-.09-4.5-4.5c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3.22 3.22V3.81L8.03 7.03c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.5-4.5.11-.1q.2-.12.42-.12" />
    </IconBase>
  ))
);

ArrowUpDownRegular.displayName = 'ArrowUpDownRegular';

// Triple export pattern
export { ArrowUpDownRegular, ArrowUpDownRegular as ArrowUpDownRegularIcon, ArrowUpDownRegular as SiArrowUpDownRegular };
export default ArrowUpDownRegular;
export type { ArrowUpDownRegularProps };
