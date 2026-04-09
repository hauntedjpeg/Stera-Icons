import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceFillProps = Omit<IconBaseProps, 'children'>;

const PeaceFill = memo(
  forwardRef<SVGSVGElement, PeaceFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-fill" {...props}>
      <path d="M11.13 21.83a10 10 0 0 1-5.47-2.26l5.47-5.46zM18.34 19.57a10 10 0 0 1-5.46 2.26v-7.72zM11.13 11.64l-6.7 6.7a9.87 9.87 0 0 1 6.7-16.17zM12.88 2.17a9.87 9.87 0 0 1 6.7 16.17l-6.7-6.7z" />
    </IconBase>
  ))
);

PeaceFill.displayName = 'PeaceFill';

// Triple export pattern (lucide-react style)
export { PeaceFill, PeaceFill as PeaceFillIcon, PeaceFill as SiPeaceFill };
export default PeaceFill;
export type { PeaceFillProps };
