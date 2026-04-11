import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallFillDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c2.37 0 4.55.83 6.25 2.22a9.86 9.86 0 0 0 0 15.3 9.8 9.8 0 0 1-12.5 0 9.85 9.85 0 0 0 0-15.3A9.8 9.8 0 0 1 12 2.13" opacity={0.4} />
        <path d="M4.49 5.6a8.1 8.1 0 0 1 0 12.8 9.8 9.8 0 0 1 0-12.8M19.5 5.6a9.8 9.8 0 0 1 0 12.8 8.1 8.1 0 0 1 0-12.8" opacity={0.4} />
        <path d="M5.75 4.35a9.86 9.86 0 0 1 0 15.3 10 10 0 0 1-1.26-1.24 8.1 8.1 0 0 0 0-12.82q.57-.67 1.26-1.24M18.25 4.35q.69.57 1.26 1.24a8.1 8.1 0 0 0 0 12.82q-.57.67-1.26 1.23a9.85 9.85 0 0 1 0-15.29" />
    </IconBase>
  ))
);

TennisBallFillDuotone.displayName = 'TennisBallFillDuotone';

// Triple export pattern (lucide-react style)
export { TennisBallFillDuotone, TennisBallFillDuotone as TennisBallFillDuotoneIcon, TennisBallFillDuotone as SiTennisBallFillDuotone };
export default TennisBallFillDuotone;
export type { TennisBallFillDuotoneProps };
