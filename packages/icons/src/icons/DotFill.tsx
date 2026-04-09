import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotFillProps = Omit<IconBaseProps, 'children'>;

const DotFill = memo(
  forwardRef<SVGSVGElement, DotFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="dot-fill" {...props}>
      <path d="M12 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75" />
    </IconBase>
  ))
);

DotFill.displayName = 'DotFill';

// Triple export pattern (lucide-react style)
export { DotFill, DotFill as DotFillIcon, DotFill as SiDotFill };
export default DotFill;
export type { DotFillProps };
