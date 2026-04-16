import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceFillProps = Omit<IconBaseProps, 'children'>;

const SliceFill = memo(
  forwardRef<SVGSVGElement, SliceFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.25 4a3 3 0 1 1 4.25 4.26l-7.6 7.6q-.4.39-.89.57v2.36c0 1.15-.93 2.08-2.08 2.08H2.5a.88.88 0 0 1-.62-1.49zM4.6 19.13h6.32c.19 0 .33-.14.33-.33v-2.05l-2.13-2.13z" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceFill.displayName = 'SliceFill';

// Triple export pattern (lucide-react style)
export { SliceFill, SliceFill as SliceFillIcon, SliceFill as SiSliceFill };
export default SliceFill;
export type { SliceFillProps };
