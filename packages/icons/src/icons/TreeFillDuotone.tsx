import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeFillDuotone = memo(
  forwardRef<SVGSVGElement, TreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 21c0 .55-.45 1-1 1s-1-.45-1-1v-2.25h2z" />
        <path d="M12 2.25q.36 0 .6.29l3.88 5c.18.23.2.53.08.79s-.38.42-.67.42h-.8l2.95 3.79c.17.23.2.53.08.79s-.39.42-.68.42h-.8l2.33 2.98c.63.82.05 2.02-1 2.02H6.03c-1.04 0-1.62-1.2-.98-2.02l2.31-2.98h-.8c-.28 0-.54-.16-.67-.42-.12-.26-.1-.56.08-.8l2.95-3.78h-.8c-.28 0-.55-.16-.67-.42-.13-.26-.1-.56.08-.8l3.89-5 .06-.06q.22-.21.53-.22" opacity={.4} />
    </IconBase>
  ))
);

TreeFillDuotone.displayName = 'TreeFillDuotone';

// Triple export pattern
export { TreeFillDuotone, TreeFillDuotone as TreeFillDuotoneIcon, TreeFillDuotone as SiTreeFillDuotone };
export default TreeFillDuotone;
export type { TreeFillDuotoneProps };
