import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M12 6.25h.08l.05.01h.02l.04.02.1.03.14.07.1.09 7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5.72-5.72V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.81l-5.72 5.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l7-7q.07-.08.16-.12l.08-.04.1-.03.04-.02h.02z" />
    </IconBase>
  ))
);

ArrowLineUpRegularDuotone.displayName = 'ArrowLineUpRegularDuotone';

// Triple export pattern
export { ArrowLineUpRegularDuotone, ArrowLineUpRegularDuotone as ArrowLineUpRegularDuotoneIcon, ArrowLineUpRegularDuotone as SiArrowLineUpRegularDuotone };
export default ArrowLineUpRegularDuotone;
export type { ArrowLineUpRegularDuotoneProps };
