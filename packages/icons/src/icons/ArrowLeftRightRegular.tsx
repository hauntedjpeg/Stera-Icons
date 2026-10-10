import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.97 6.97c.3-.3.77-.3 1.06 0l4.5 4.5q.22.22.22.53 0 .23-.13.42l-.09.11-4.5 4.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.22-3.22H3.81l3.22 3.22c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4.5-4.5-.05-.06c-.24-.3-.22-.73.05-1l4.5-4.5c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.22 3.22H20.2l-3.22-3.22c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowLeftRightRegular.displayName = 'ArrowLeftRightRegular';

// Triple export pattern
export { ArrowLeftRightRegular, ArrowLeftRightRegular as ArrowLeftRightRegularIcon, ArrowLeftRightRegular as SiArrowLeftRightRegular };
export default ArrowLeftRightRegular;
export type { ArrowLeftRightRegularProps };
