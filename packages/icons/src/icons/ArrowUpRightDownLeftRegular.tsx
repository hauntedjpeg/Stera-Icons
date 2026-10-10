import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 3.25c.41 0 .75.34.75.75v6.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.81L5.81 19.25h4.69c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75v-6.5c0-.41.34-.75.75-.75s.75.34.75.75v4.69L18.19 4.75H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftRegular.displayName = 'ArrowUpRightDownLeftRegular';

// Triple export pattern
export { ArrowUpRightDownLeftRegular, ArrowUpRightDownLeftRegular as ArrowUpRightDownLeftRegularIcon, ArrowUpRightDownLeftRegular as SiArrowUpRightDownLeftRegular };
export default ArrowUpRightDownLeftRegular;
export type { ArrowUpRightDownLeftRegularProps };
