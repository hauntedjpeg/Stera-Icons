import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5.72 5.72H21c.41 0 .75.34.75.75s-.34.75-.75.75H8.81l5.72 5.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-7-7-.09-.1-.07-.14-.05-.16-.01-.13.01-.13.04-.15v-.01l.05-.08q.04-.09.12-.16z" />
        <path d="M3 3.25c.41 0 .75.34.75.75v16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

ArrowLineLeftRegularDuotone.displayName = 'ArrowLineLeftRegularDuotone';

// Triple export pattern
export { ArrowLineLeftRegularDuotone, ArrowLineLeftRegularDuotone as ArrowLineLeftRegularDuotoneIcon, ArrowLineLeftRegularDuotone as SiArrowLineLeftRegularDuotone };
export default ArrowLineLeftRegularDuotone;
export type { ArrowLineLeftRegularDuotoneProps };
