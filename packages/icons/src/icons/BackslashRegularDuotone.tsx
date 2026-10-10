import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BackslashRegularDuotone = memo(
  forwardRef<SVGSVGElement, BackslashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.56 19.5c.28.32.25.8-.07 1.06-.3.28-.78.25-1.05-.07l-7-8 1.12-.98z" opacity={.4} />
        <path d="M4.5 3.44c.32-.28.8-.25 1.06.07l7 8-1.12.98-7-8c-.28-.3-.25-.78.07-1.05" />
    </IconBase>
  ))
);

BackslashRegularDuotone.displayName = 'BackslashRegularDuotone';

// Triple export pattern
export { BackslashRegularDuotone, BackslashRegularDuotone as BackslashRegularDuotoneIcon, BackslashRegularDuotone as SiBackslashRegularDuotone };
export default BackslashRegularDuotone;
export type { BackslashRegularDuotoneProps };
