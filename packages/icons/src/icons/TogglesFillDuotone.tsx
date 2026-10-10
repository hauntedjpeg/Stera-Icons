import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesFillDuotone = memo(
  forwardRef<SVGSVGElement, TogglesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 12.63c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88H8c-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87zm-2 3c-1.04 0-1.87.83-1.87 1.87s.83 1.88 1.87 1.88h2c1.04 0 1.88-.84 1.88-1.88s-.84-1.87-1.88-1.87zM16 1.63c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88H8c-2.7 0-4.87-2.19-4.87-4.88C3.13 3.8 5.3 1.63 8 1.63zm-8 3c-1.04 0-1.87.83-1.87 1.87S6.96 8.38 8 8.38h2c1.04 0 1.88-.84 1.88-1.88S11.04 4.63 10 4.63z" opacity={0.4} />
        <path d="M16 15.63c1.04 0 1.88.83 1.88 1.87s-.84 1.88-1.88 1.88h-2c-1.04 0-1.87-.84-1.87-1.88s.83-1.87 1.87-1.87zM10 4.63c1.04 0 1.88.83 1.88 1.87S11.04 8.38 10 8.38H8c-1.04 0-1.87-.84-1.87-1.88S6.96 4.63 8 4.63z" />
    </IconBase>
  ))
);

TogglesFillDuotone.displayName = 'TogglesFillDuotone';

// Triple export pattern
export { TogglesFillDuotone, TogglesFillDuotone as TogglesFillDuotoneIcon, TogglesFillDuotone as SiTogglesFillDuotone };
export default TogglesFillDuotone;
export type { TogglesFillDuotoneProps };
