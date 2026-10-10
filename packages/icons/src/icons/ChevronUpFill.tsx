import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronUpFill = memo(
  forwardRef<SVGSVGElement, ChevronUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.13q.36 0 .62.25l7 7c.25.25.32.63.19.96-.14.32-.46.54-.81.54H5c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96l7-7q.26-.25.62-.25" />
    </IconBase>
  ))
);

ChevronUpFill.displayName = 'ChevronUpFill';

// Triple export pattern
export { ChevronUpFill, ChevronUpFill as ChevronUpFillIcon, ChevronUpFill as SiChevronUpFill };
export default ChevronUpFill;
export type { ChevronUpFillProps };
