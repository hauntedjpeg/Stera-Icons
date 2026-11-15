import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EqualsRegularProps = Omit<IconBaseProps, 'children'>;

const EqualsRegular = memo(
  forwardRef<SVGSVGElement, EqualsRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20 7.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

EqualsRegular.displayName = 'EqualsRegular';

// Triple export pattern
export { EqualsRegular, EqualsRegular as EqualsRegularIcon, EqualsRegular as SiEqualsRegular };
export default EqualsRegular;
export type { EqualsRegularProps };
