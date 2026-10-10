import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleNotchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25q-1.54 0-2.97.59-1.43.6-2.51 1.68-1.1 1.09-1.68 2.51-.59 1.43-.59 2.97t.59 2.97q.6 1.43 1.68 2.51 1.09 1.1 2.51 1.68 1.43.59 2.97.59t2.97-.59q1.43-.6 2.51-1.68 1.1-1.09 1.68-2.51.59-1.42.59-2.97c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25q0 2.04-.78 3.92-.79 1.89-2.22 3.33-1.44 1.43-3.33 2.22-1.88.77-3.92.78-2.04 0-3.92-.78-1.89-.79-3.33-2.22-1.43-1.44-2.22-3.33-.77-1.88-.78-3.92 0-2.04.78-3.92.79-1.89 2.22-3.33Q6.2 3.32 8.08 2.53q1.88-.77 3.92-.78" opacity={.4} />
        <path d="M12 1.75q2.04 0 3.92.78 1.89.79 3.33 2.22 1.43 1.44 2.22 3.33.77 1.88.78 3.92c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25q0-1.54-.59-2.97-.6-1.43-1.68-2.51-1.09-1.1-2.51-1.68-1.42-.59-2.97-.59c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

CircleNotchFillDuotone.displayName = 'CircleNotchFillDuotone';

// Triple export pattern
export { CircleNotchFillDuotone, CircleNotchFillDuotone as CircleNotchFillDuotoneIcon, CircleNotchFillDuotone as SiCircleNotchFillDuotone };
export default CircleNotchFillDuotone;
export type { CircleNotchFillDuotoneProps };
