import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpFill = memo(
  forwardRef<SVGSVGElement, ArrowUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13q.36 0 .62.25l6 6c.25.25.32.63.19.96-.14.32-.46.54-.81.54h-5.13V19c0 .48-.39.88-.87.88s-.88-.4-.88-.88v-7.12H6c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96l6-6q.26-.25.62-.25" />
    </IconBase>
  ))
);

ArrowUpFill.displayName = 'ArrowUpFill';

// Triple export pattern
export { ArrowUpFill, ArrowUpFill as ArrowUpFillIcon, ArrowUpFill as SiArrowUpFill };
export default ArrowUpFill;
export type { ArrowUpFillProps };
