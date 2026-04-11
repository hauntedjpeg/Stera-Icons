import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallFillProps = Omit<IconBaseProps, 'children'>;

const TennisBallFill = memo(
  forwardRef<SVGSVGElement, TennisBallFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c2.37 0 4.55.83 6.25 2.22a9.86 9.86 0 0 0 0 15.3 9.8 9.8 0 0 1-12.5 0 9.85 9.85 0 0 0 0-15.3A9.8 9.8 0 0 1 12 2.13" />
        <path d="M19.5 5.6a9.8 9.8 0 0 1 0 12.8 8.1 8.1 0 0 1 0-12.8M4.49 5.6a8.1 8.1 0 0 1 0 12.8 9.8 9.8 0 0 1 0-12.8" />
    </IconBase>
  ))
);

TennisBallFill.displayName = 'TennisBallFill';

// Triple export pattern (lucide-react style)
export { TennisBallFill, TennisBallFill as TennisBallFillIcon, TennisBallFill as SiTennisBallFill };
export default TennisBallFill;
export type { TennisBallFillProps };
