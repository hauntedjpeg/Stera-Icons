import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.47 5.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L7.81 17.25H6.75v-1.06z" opacity={.4} />
        <path d="M6 7.25c.41 0 .75.34.75.75v9.25H16c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowDownLeftRegularDuotone.displayName = 'ArrowDownLeftRegularDuotone';

// Triple export pattern
export { ArrowDownLeftRegularDuotone, ArrowDownLeftRegularDuotone as ArrowDownLeftRegularDuotoneIcon, ArrowDownLeftRegularDuotone as SiArrowDownLeftRegularDuotone };
export default ArrowDownLeftRegularDuotone;
export type { ArrowDownLeftRegularDuotoneProps };
