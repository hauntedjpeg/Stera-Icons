import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronUpFill = memo(
  forwardRef<SVGSVGElement, ChevronUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.13q.36 0 .62.25l7 7a.88.88 0 0 1-.62 1.5H5a.88.88 0 0 1-.62-1.5l7-7a1 1 0 0 1 .62-.25" />
    </IconBase>
  ))
);

ChevronUpFill.displayName = 'ChevronUpFill';

// Triple export pattern (lucide-react style)
export { ChevronUpFill, ChevronUpFill as ChevronUpFillIcon, ChevronUpFill as SiChevronUpFill };
export default ChevronUpFill;
export type { ChevronUpFillProps };
