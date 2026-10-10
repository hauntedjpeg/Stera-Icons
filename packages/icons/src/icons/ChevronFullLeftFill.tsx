import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.38 4.38c.25-.25.63-.32.96-.19.32.14.53.46.54.81v14c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-7-7q-.25-.27-.25-.62 0-.36.25-.62z" />
    </IconBase>
  ))
);

ChevronFullLeftFill.displayName = 'ChevronFullLeftFill';

// Triple export pattern
export { ChevronFullLeftFill, ChevronFullLeftFill as ChevronFullLeftFillIcon, ChevronFullLeftFill as SiChevronFullLeftFill };
export default ChevronFullLeftFill;
export type { ChevronFullLeftFillProps };
