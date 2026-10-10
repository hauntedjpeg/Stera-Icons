import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceBoldProps = Omit<IconBaseProps, 'children'>;

const PeaceBold = memo(
  forwardRef<SVGSVGElement, PeaceBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M7.1 18.32c1.1.86 2.44 1.43 3.9 1.62V14.4zm5.9 1.62c1.46-.19 2.8-.76 3.9-1.62l-3.9-3.9zM11 4.06c-3.95.5-7 3.86-7 7.94 0 1.85.63 3.55 1.68 4.9L11 11.6zm2 7.53 5.32 5.31C19.37 15.55 20 13.85 20 12c0-4.08-3.05-7.44-7-7.94z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceBold.displayName = 'PeaceBold';

// Triple export pattern
export { PeaceBold, PeaceBold as PeaceBoldIcon, PeaceBold as SiPeaceBold };
export default PeaceBold;
export type { PeaceBoldProps };
