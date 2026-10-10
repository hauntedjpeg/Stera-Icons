import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardFill = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 14.38c.34-.34.9-.34 1.24 0l6 6c.25.25.32.63.19.96-.14.32-.46.54-.81.54H6c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96zM18 2.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-6 6c-.34.34-.9.34-1.24 0l-6-6c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ChevronFullInwardFill.displayName = 'ChevronFullInwardFill';

// Triple export pattern
export { ChevronFullInwardFill, ChevronFullInwardFill as ChevronFullInwardFillIcon, ChevronFullInwardFill as SiChevronFullInwardFill };
export default ChevronFullInwardFill;
export type { ChevronFullInwardFillProps };
