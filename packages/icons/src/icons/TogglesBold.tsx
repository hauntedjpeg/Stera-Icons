import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesBoldProps = Omit<IconBaseProps, 'children'>;

const TogglesBold = memo(
  forwardRef<SVGSVGElement, TogglesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 12.5c2.76 0 5 2.24 5 5s-2.24 5-5 5H8c-2.76 0-5-2.24-5-5s2.24-5 5-5zm-2 3c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2-.9 2-2s-.9-2-2-2z" clipRule="evenodd" />
        <path d="M10 4.5c1.1 0 2 .9 2 2s-.9 2-2 2H8c-1.1 0-2-.9-2-2s.9-2 2-2z" />
        <path fillRule="evenodd" d="M16 1.5c2.76 0 5 2.24 5 5s-2.24 5-5 5H8c-2.76 0-5-2.24-5-5s2.24-5 5-5zm-8 2c-1.66 0-3 1.34-3 3s1.34 3 3 3h8c1.66 0 3-1.34 3-3s-1.34-3-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

TogglesBold.displayName = 'TogglesBold';

// Triple export pattern
export { TogglesBold, TogglesBold as TogglesBoldIcon, TogglesBold as SiTogglesBold };
export default TogglesBold;
export type { TogglesBoldProps };
