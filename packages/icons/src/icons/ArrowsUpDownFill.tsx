import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownFill = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-fill" {...props}>
      <path d="M17 3.13c.48 0 .87.39.87.87v13.13H21a.88.88 0 0 1 .62 1.49l-4 4a1 1 0 0 1-.41.23h-.02l-.13.02h-.19l-.14-.04h-.01l-.22-.11-.05-.04-.07-.06-4-4a.88.88 0 0 1 .62-1.5h3.12V4c0-.48.4-.87.88-.87M7 2.13a1 1 0 0 1 .62.25l4 4a.88.88 0 0 1-.62 1.5H7.87V21a.88.88 0 0 1-1.75 0V7.88H3a.88.88 0 0 1-.62-1.5l4-4 .06-.06h.01l.11-.08h.01a1 1 0 0 1 .27-.1h.03z" />
    </IconBase>
  ))
);

ArrowsUpDownFill.displayName = 'ArrowsUpDownFill';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownFill, ArrowsUpDownFill as ArrowsUpDownFillIcon, ArrowsUpDownFill as SiArrowsUpDownFill };
export default ArrowsUpDownFill;
export type { ArrowsUpDownFillProps };
