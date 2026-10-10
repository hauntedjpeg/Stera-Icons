import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.25c.41 0 .75.34.75.75v12.19l-.75.75-.75-.75V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M18.47 11.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7c-.3.3-.77.3-1.06 0l-7-7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 17.94z" />
    </IconBase>
  ))
);

ArrowDownRegularDuotone.displayName = 'ArrowDownRegularDuotone';

// Triple export pattern
export { ArrowDownRegularDuotone, ArrowDownRegularDuotone as ArrowDownRegularDuotoneIcon, ArrowDownRegularDuotone as SiArrowDownRegularDuotone };
export default ArrowDownRegularDuotone;
export type { ArrowDownRegularDuotoneProps };
