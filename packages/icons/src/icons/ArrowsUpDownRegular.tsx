import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownRegular = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3.25c.41 0 .75.34.75.75v16.19l2.72-2.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4 4c-.27.27-.7.3-1 .05l-.06-.05-4-4c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.72 2.72V4c0-.41.34-.75.75-.75M7 2.25q.31 0 .53.22l4 4c.3.3.3.77 0 1.06s-.77.3-1.06 0L7.75 4.81V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.81L3.53 7.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4-4 .11-.1q.2-.12.42-.12" />
    </IconBase>
  ))
);

ArrowsUpDownRegular.displayName = 'ArrowsUpDownRegular';

// Triple export pattern
export { ArrowsUpDownRegular, ArrowsUpDownRegular as ArrowsUpDownRegularIcon, ArrowsUpDownRegular as SiArrowsUpDownRegular };
export default ArrowsUpDownRegular;
export type { ArrowsUpDownRegularProps };
