import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EqualsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EqualsRegularDuotone = memo(
  forwardRef<SVGSVGElement, EqualsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

EqualsRegularDuotone.displayName = 'EqualsRegularDuotone';

// Triple export pattern
export { EqualsRegularDuotone, EqualsRegularDuotone as EqualsRegularDuotoneIcon, EqualsRegularDuotone as SiEqualsRegularDuotone };
export default EqualsRegularDuotone;
export type { EqualsRegularDuotoneProps };
