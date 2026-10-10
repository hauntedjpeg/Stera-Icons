import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpDownFill = memo(
  forwardRef<SVGSVGElement, ArrowUpDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.13q.36 0 .62.25l4 4c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-3.13v10.26H16c.35 0 .67.2.8.54.14.32.07.7-.18.95l-4 4c-.32.32-.83.34-1.17.06l-.07-.06-4-4c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54h3.12V6.89H8c-.35 0-.67-.22-.8-.55-.14-.32-.07-.7.18-.95l4-4 .06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

ArrowUpDownFill.displayName = 'ArrowUpDownFill';

// Triple export pattern
export { ArrowUpDownFill, ArrowUpDownFill as ArrowUpDownFillIcon, ArrowUpDownFill as SiArrowUpDownFill };
export default ArrowUpDownFill;
export type { ArrowUpDownFillProps };
