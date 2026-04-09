import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleFillProps = Omit<IconBaseProps, 'children'>;

const CircleFill = memo(
  forwardRef<SVGSVGElement, CircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-fill" {...props}>
      <path d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75" />
    </IconBase>
  ))
);

CircleFill.displayName = 'CircleFill';

// Triple export pattern (lucide-react style)
export { CircleFill, CircleFill as CircleFillIcon, CircleFill as SiCircleFill };
export default CircleFill;
export type { CircleFillProps };
