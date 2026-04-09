import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-up-fill" {...props}>
      <path d="M12 7.13q.36 0 .62.25l7 7a.88.88 0 0 1-.62 1.5H5a.88.88 0 0 1-.62-1.5l7-7a1 1 0 0 1 .62-.25" />
    </IconBase>
  ))
);

ChevronFullUpFill.displayName = 'ChevronFullUpFill';

// Triple export pattern (lucide-react style)
export { ChevronFullUpFill, ChevronFullUpFill as ChevronFullUpFillIcon, ChevronFullUpFill as SiChevronFullUpFill };
export default ChevronFullUpFill;
export type { ChevronFullUpFillProps };
