import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusBoldProps = Omit<IconBaseProps, 'children'>;

const MinusBold = memo(
  forwardRef<SVGSVGElement, MinusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MinusBold.displayName = 'MinusBold';

// Triple export pattern
export { MinusBold, MinusBold as MinusBoldIcon, MinusBold as SiMinusBold };
export default MinusBold;
export type { MinusBoldProps };
