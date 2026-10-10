import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleRegular = memo(
  forwardRef<SVGSVGElement, ExpandSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 14.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.72 4.72H9c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v4.19zM21 2.25c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.81l-4.72 4.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.72-4.72H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExpandSimpleRegular.displayName = 'ExpandSimpleRegular';

// Triple export pattern
export { ExpandSimpleRegular, ExpandSimpleRegular as ExpandSimpleRegularIcon, ExpandSimpleRegular as SiExpandSimpleRegular };
export default ExpandSimpleRegular;
export type { ExpandSimpleRegularProps };
