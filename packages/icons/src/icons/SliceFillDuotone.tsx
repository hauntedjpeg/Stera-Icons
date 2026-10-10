import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SliceFillDuotone = memo(
  forwardRef<SVGSVGElement, SliceFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.48 5.24c.5-.49 1.29-.49 1.78 0 .49.5.49 1.29 0 1.78l-7.6 7.6c-.27.27-.7.29-.98.06l-.06-.05-1.26-1.26z" opacity={.4} />
        <path fillRule="evenodd" d="M17.25 4c1.17-1.17 3.07-1.17 4.25 0 1.17 1.18 1.17 3.08 0 4.26l-7.6 7.6q-.4.39-.89.57v2.36c0 1.15-.93 2.08-2.08 2.08H2.5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95zM4.6 19.13h6.32c.19 0 .33-.14.33-.33v-2.05l-2.13-2.13zM20.26 5.24c-.5-.49-1.29-.49-1.78 0l-8.12 8.13 1.26 1.25.06.05c.29.24.71.22.98-.05l7.6-7.6c.49-.49.49-1.29 0-1.78" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceFillDuotone.displayName = 'SliceFillDuotone';

// Triple export pattern
export { SliceFillDuotone, SliceFillDuotone as SliceFillDuotoneIcon, SliceFillDuotone as SiSliceFillDuotone };
export default SliceFillDuotone;
export type { SliceFillDuotoneProps };
