import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DotRegularProps = Omit<IconBaseProps, 'children'>;

const DotRegular = memo(
  forwardRef<SVGSVGElement, DotRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="dot" {...props}>
      <path fillRule="evenodd" d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DotRegular.displayName = 'DotRegular';

// Triple export pattern (lucide-react style)
export { DotRegular, DotRegular as DotRegularIcon, DotRegular as SiDotRegular };
export default DotRegular;
export type { DotRegularProps };
