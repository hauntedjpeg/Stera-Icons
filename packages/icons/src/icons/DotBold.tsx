import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotBoldProps = Omit<IconBaseProps, 'children'>;

const DotBold = memo(
  forwardRef<SVGSVGElement, DotBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="dot-bold" {...props}>
      <path fillRule="evenodd" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

DotBold.displayName = 'DotBold';

// Triple export pattern (lucide-react style)
export { DotBold, DotBold as DotBoldIcon, DotBold as SiDotBold };
export default DotBold;
export type { DotBoldProps };
