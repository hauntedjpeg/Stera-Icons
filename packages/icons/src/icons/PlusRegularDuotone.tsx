import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.25 12.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.25zM20 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-7.25v-1.5z" opacity={0.4} />
        <path d="M12 3.25c.41 0 .75.34.75.75v16c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PlusRegularDuotone.displayName = 'PlusRegularDuotone';

// Triple export pattern
export { PlusRegularDuotone, PlusRegularDuotone as PlusRegularDuotoneIcon, PlusRegularDuotone as SiPlusRegularDuotone };
export default PlusRegularDuotone;
export type { PlusRegularDuotoneProps };
