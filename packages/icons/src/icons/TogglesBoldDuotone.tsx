import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesBoldDuotone = memo(
  forwardRef<SVGSVGElement, TogglesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12.5c2.76 0 5 2.24 5 5s-2.24 5-5 5H8c-2.76 0-5-2.24-5-5s2.24-5 5-5zm-2 3c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2-.9 2-2s-.9-2-2-2zM16 1.5c2.76 0 5 2.24 5 5s-2.24 5-5 5H8c-2.76 0-5-2.24-5-5s2.24-5 5-5zm-8 2c-1.66 0-3 1.34-3 3s1.34 3 3 3h8c1.66 0 3-1.34 3-3s-1.34-3-3-3z" opacity={0.4} />
        <path d="M16 15.5c1.1 0 2 .9 2 2s-.9 2-2 2h-2c-1.1 0-2-.9-2-2s.9-2 2-2zM10 4.5c1.1 0 2 .9 2 2s-.9 2-2 2H8c-1.1 0-2-.9-2-2s.9-2 2-2z" />
    </IconBase>
  ))
);

TogglesBoldDuotone.displayName = 'TogglesBoldDuotone';

// Triple export pattern
export { TogglesBoldDuotone, TogglesBoldDuotone as TogglesBoldDuotoneIcon, TogglesBoldDuotone as SiTogglesBoldDuotone };
export default TogglesBoldDuotone;
export type { TogglesBoldDuotoneProps };
