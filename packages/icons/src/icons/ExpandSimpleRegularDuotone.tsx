import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 14.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.72 4.72H3.75v-1.06zM20.25 3.75v1.06l-4.72 4.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.72-4.72z" opacity={0.4} />
        <path d="M3 14.25c.41 0 .75.34.75.75v5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75M21 2.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExpandSimpleRegularDuotone.displayName = 'ExpandSimpleRegularDuotone';

// Triple export pattern
export { ExpandSimpleRegularDuotone, ExpandSimpleRegularDuotone as ExpandSimpleRegularDuotoneIcon, ExpandSimpleRegularDuotone as SiExpandSimpleRegularDuotone };
export default ExpandSimpleRegularDuotone;
export type { ExpandSimpleRegularDuotoneProps };
