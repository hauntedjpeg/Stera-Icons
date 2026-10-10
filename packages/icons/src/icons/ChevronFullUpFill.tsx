import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.13q.36 0 .62.25l7 7c.25.25.32.63.19.96-.14.32-.46.54-.81.54H5c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96l7-7q.26-.25.62-.25" />
    </IconBase>
  ))
);

ChevronFullUpFill.displayName = 'ChevronFullUpFill';

// Triple export pattern
export { ChevronFullUpFill, ChevronFullUpFill as ChevronFullUpFillIcon, ChevronFullUpFill as SiChevronFullUpFill };
export default ChevronFullUpFill;
export type { ChevronFullUpFillProps };
