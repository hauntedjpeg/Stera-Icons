import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownFill = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3.13c.48 0 .87.39.87.87v13.13H21c.35 0 .67.2.8.54.14.32.07.7-.18.95l-4 4q-.12.12-.27.18l-.14.05h-.02l-.13.02h-.19l-.14-.04h-.01l-.22-.11-.05-.04-.07-.06-4-4c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54h3.12V4c0-.48.4-.87.88-.87M7 2.13l.17.01.21.07q.13.06.24.17l4 4c.25.25.32.63.19.95-.14.33-.46.54-.81.54H7.87V21c0 .48-.39.88-.87.88s-.88-.4-.88-.88V7.88H3c-.35 0-.67-.22-.8-.55-.14-.32-.07-.7.18-.95l4-4 .07-.06.11-.08h.01q.12-.07.27-.1h.03z" />
    </IconBase>
  ))
);

ArrowsUpDownFill.displayName = 'ArrowsUpDownFill';

// Triple export pattern
export { ArrowsUpDownFill, ArrowsUpDownFill as ArrowsUpDownFillIcon, ArrowsUpDownFill as SiArrowsUpDownFill };
export default ArrowsUpDownFill;
export type { ArrowsUpDownFillProps };
