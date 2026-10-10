import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashRegularProps = Omit<IconBaseProps, 'children'>;

const BackslashRegular = memo(
  forwardRef<SVGSVGElement, BackslashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.5 3.44c.32-.28.8-.25 1.06.07l14 16c.28.3.25.78-.07 1.05-.3.28-.78.25-1.05-.07l-14-16c-.28-.3-.25-.78.07-1.05" />
    </IconBase>
  ))
);

BackslashRegular.displayName = 'BackslashRegular';

// Triple export pattern
export { BackslashRegular, BackslashRegular as BackslashRegularIcon, BackslashRegular as SiBackslashRegular };
export default BackslashRegular;
export type { BackslashRegularProps };
