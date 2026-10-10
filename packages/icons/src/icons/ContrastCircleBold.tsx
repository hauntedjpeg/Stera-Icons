import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleBold = memo(
  forwardRef<SVGSVGElement, ContrastCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 5.5c-1.2 0-2.34.47-3.18 1.32C7.97 9.66 7.5 10.8 7.5 12s.47 2.34 1.32 3.18c.84.85 1.99 1.32 3.18 1.32V20c4.42 0 8-3.58 8-8s-3.58-8-8-8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleBold.displayName = 'ContrastCircleBold';

// Triple export pattern
export { ContrastCircleBold, ContrastCircleBold as ContrastCircleBoldIcon, ContrastCircleBold as SiContrastCircleBold };
export default ContrastCircleBold;
export type { ContrastCircleBoldProps };
