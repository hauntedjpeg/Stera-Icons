import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesBoldDuotone = memo(
  forwardRef<SVGSVGElement, TogglesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12.5a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-2 3a2 2 0 1 0 0 4h2a2 2 0 1 0 0-4zM16 1.5a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-8 2a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6z" opacity={0.4} />
        <path d="M16 15.5a2 2 0 1 1 0 4h-2a2 2 0 1 1 0-4zM10 4.5a2 2 0 1 1 0 4H8a2 2 0 1 1 0-4z" />
    </IconBase>
  ))
);

TogglesBoldDuotone.displayName = 'TogglesBoldDuotone';

// Triple export pattern (lucide-react style)
export { TogglesBoldDuotone, TogglesBoldDuotone as TogglesBoldDuotoneIcon, TogglesBoldDuotone as SiTogglesBoldDuotone };
export default TogglesBoldDuotone;
export type { TogglesBoldDuotoneProps };
