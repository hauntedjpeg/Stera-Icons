import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusRegularProps = Omit<IconBaseProps, 'children'>;

const MinusRegular = memo(
  forwardRef<SVGSVGElement, MinusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

MinusRegular.displayName = 'MinusRegular';

// Triple export pattern
export { MinusRegular, MinusRegular as MinusRegularIcon, MinusRegular as SiMinusRegular };
export default MinusRegular;
export type { MinusRegularProps };
