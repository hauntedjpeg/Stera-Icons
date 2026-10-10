import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3.25c.41 0 .75.34.75.75v16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M9.47 4.47c.3-.3.77-.3 1.06 0l7 7q.07.07.12.16l.04.08.05.16.01.13-.01.13-.05.16q-.02.08-.08.14l-.08.1-7 7c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l5.72-5.72H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.19L9.47 5.53c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowLineRightRegularDuotone.displayName = 'ArrowLineRightRegularDuotone';

// Triple export pattern
export { ArrowLineRightRegularDuotone, ArrowLineRightRegularDuotone as ArrowLineRightRegularDuotoneIcon, ArrowLineRightRegularDuotone as SiArrowLineRightRegularDuotone };
export default ArrowLineRightRegularDuotone;
export type { ArrowLineRightRegularDuotoneProps };
