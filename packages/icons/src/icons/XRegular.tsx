import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XRegularProps = Omit<IconBaseProps, 'children'>;

const XRegular = memo(
  forwardRef<SVGSVGElement, XRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.47 5.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L13.06 12l5.47 5.47c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 13.06l-5.47 5.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 12 5.47 6.53c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 10.94z" />
    </IconBase>
  ))
);

XRegular.displayName = 'XRegular';

// Triple export pattern
export { XRegular, XRegular as XRegularIcon, XRegular as SiXRegular };
export default XRegular;
export type { XRegularProps };
