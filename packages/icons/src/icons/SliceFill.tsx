import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceFillProps = Omit<IconBaseProps, 'children'>;

const SliceFill = memo(
  forwardRef<SVGSVGElement, SliceFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.24 4c1.18-1.17 3.08-1.17 4.25 0 1.18 1.18 1.18 3.08 0 4.26l-7.6 7.6q-.38.39-.88.57v2.36c0 1.15-.93 2.08-2.08 2.08H2.5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95zM4.61 19.13h6.32c.19 0 .33-.14.33-.33v-2.05l-2.13-2.13z" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceFill.displayName = 'SliceFill';

// Triple export pattern
export { SliceFill, SliceFill as SliceFillIcon, SliceFill as SiSliceFill };
export default SliceFill;
export type { SliceFillProps };
