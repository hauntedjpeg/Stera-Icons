import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceFillProps = Omit<IconBaseProps, 'children'>;

const PeaceFill = memo(
  forwardRef<SVGSVGElement, PeaceFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 21.83c-2.07-.18-3.96-1-5.47-2.26l5.47-5.46zM18.34 19.57c-1.51 1.26-3.4 2.08-5.46 2.26v-7.72zM11.13 11.64l-6.7 6.7c-1.44-1.72-2.3-3.93-2.3-6.34 0-5.16 3.95-9.4 9-9.83zM12.88 2.17c5.04.44 9 4.67 9 9.83 0 2.41-.87 4.62-2.3 6.34l-6.7-6.7z" />
    </IconBase>
  ))
);

PeaceFill.displayName = 'PeaceFill';

// Triple export pattern
export { PeaceFill, PeaceFill as PeaceFillIcon, PeaceFill as SiPeaceFill };
export default PeaceFill;
export type { PeaceFillProps };
