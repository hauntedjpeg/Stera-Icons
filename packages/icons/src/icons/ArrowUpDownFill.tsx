import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownFill = memo(
  forwardRef<SVGSVGElement, ArrowUpDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-down-fill" {...props}>
      <path d="M12 1.13q.36 0 .62.25l4 4a.88.88 0 0 1-.62 1.5h-3.13v10.25H16a.88.88 0 0 1 .62 1.49l-4 4a.9.9 0 0 1-1.17.06l-.07-.06-4-4a.88.88 0 0 1 .62-1.5h3.12V6.89H8a.88.88 0 0 1-.62-1.5l4-4 .06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

ArrowUpDownFill.displayName = 'ArrowUpDownFill';

// Triple export pattern (lucide-react style)
export { ArrowUpDownFill, ArrowUpDownFill as ArrowUpDownFillIcon, ArrowUpDownFill as SiArrowUpDownFill };
export default ArrowUpDownFill;
export type { ArrowUpDownFillProps };
