import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.87 11.88V19c0 .48-.39.88-.87.88s-.87-.4-.87-.88v-7.12z" opacity={.4} />
        <path d="M12 4.13q.36 0 .62.25l6 6c.25.25.32.63.19.96-.14.32-.46.54-.81.54H6c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96l6-6q.26-.25.62-.25" />
    </IconBase>
  ))
);

ArrowUpFillDuotone.displayName = 'ArrowUpFillDuotone';

// Triple export pattern
export { ArrowUpFillDuotone, ArrowUpFillDuotone as ArrowUpFillDuotoneIcon, ArrowUpFillDuotone as SiArrowUpFillDuotone };
export default ArrowUpFillDuotone;
export type { ArrowUpFillDuotoneProps };
