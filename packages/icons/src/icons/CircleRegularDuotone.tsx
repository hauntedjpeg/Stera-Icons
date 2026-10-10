import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.75c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25v1.5c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25z" />
        <path d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75v-1.5c4.56 0 8.25-3.7 8.25-8.25S16.55 3.75 12 3.75z" opacity={.4} />
    </IconBase>
  ))
);

CircleRegularDuotone.displayName = 'CircleRegularDuotone';

// Triple export pattern
export { CircleRegularDuotone, CircleRegularDuotone as CircleRegularDuotoneIcon, CircleRegularDuotone as SiCircleRegularDuotone };
export default CircleRegularDuotone;
export type { CircleRegularDuotoneProps };
