import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, MinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11c.55 0 1 .45 1 1s-.45 1-1 1h-9v-2z" opacity={.4} />
        <path d="M12 13H3c-.55 0-1-.45-1-1s.45-1 1-1h9z" />
    </IconBase>
  ))
);

MinusBoldDuotone.displayName = 'MinusBoldDuotone';

// Triple export pattern
export { MinusBoldDuotone, MinusBoldDuotone as MinusBoldDuotoneIcon, MinusBoldDuotone as SiMinusBoldDuotone };
export default MinusBoldDuotone;
export type { MinusBoldDuotoneProps };
