import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DiamondFillProps = Omit<IconBaseProps, 'children'>;

const DiamondFill = memo(
  forwardRef<SVGSVGElement, DiamondFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.8 1.56a4 4 0 0 1 2.4 0c.5.16.91.44 1.34.8q.6.54 1.47 1.42l4.21 4.2q.88.88 1.42 1.48.55.63.8 1.34c.25.78.25 1.62 0 2.4-.16.5-.44.91-.8 1.34q-.54.6-1.42 1.47l-4.2 4.21q-.88.88-1.48 1.42c-.43.36-.85.64-1.34.8-.78.26-1.62.26-2.4 0-.5-.16-.91-.44-1.34-.8q-.6-.54-1.47-1.42l-4.21-4.2q-.88-.88-1.42-1.48a4 4 0 0 1-.8-1.34 4 4 0 0 1 0-2.4c.16-.5.44-.91.8-1.34Q2.9 8.86 3.78 8l4.2-4.21q.88-.88 1.48-1.42.63-.55 1.34-.8" />
    </IconBase>
  ))
);

DiamondFill.displayName = 'DiamondFill';

// Triple export pattern (lucide-react style)
export { DiamondFill, DiamondFill as DiamondFillIcon, DiamondFill as SiDiamondFill };
export default DiamondFill;
export type { DiamondFillProps };
