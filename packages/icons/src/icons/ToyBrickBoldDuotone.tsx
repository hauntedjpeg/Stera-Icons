import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToyBrickBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToyBrickBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToyBrickBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 8c1.66 0 3 1.34 3 3v6c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-6c0-1.66 1.34-3 3-3zM6 10c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M6.75 6.5c-.14 0-.25.11-.25.25V8H6q-.83.01-1.5.4V6.75c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1 2.25 2.25V8h-2V6.75c0-.14-.11-.25-.25-.25zM14.75 6.5c-.14 0-.25.11-.25.25V8h-2V6.75c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1 2.25 2.25V8.4q-.67-.39-1.5-.4h-.5V6.75c0-.14-.11-.25-.25-.25z" />
    </IconBase>
  ))
);

ToyBrickBoldDuotone.displayName = 'ToyBrickBoldDuotone';

// Triple export pattern
export { ToyBrickBoldDuotone, ToyBrickBoldDuotone as ToyBrickBoldDuotoneIcon, ToyBrickBoldDuotone as SiToyBrickBoldDuotone };
export default ToyBrickBoldDuotone;
export type { ToyBrickBoldDuotoneProps };
