import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsFillProps = Omit<IconBaseProps, 'children'>;

const StairsFill = memo(
  forwardRef<SVGSVGElement, StairsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-fill" {...props}>
      <path d="M21.5 3.25a1.25 1.25 0 1 1 0 2.5h-3.75v4.75c0 .69-.56 1.25-1.25 1.25h-4.75v4.75c0 .69-.56 1.25-1.25 1.25H5.75v3.75a1.25 1.25 0 1 1-2.5 0v-5c0-.69.56-1.25 1.25-1.25h4.75V10.5c0-.69.56-1.25 1.25-1.25h4.75V4.5c0-.69.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

StairsFill.displayName = 'StairsFill';

// Triple export pattern (lucide-react style)
export { StairsFill, StairsFill as StairsFillIcon, StairsFill as SiStairsFill };
export default StairsFill;
export type { StairsFillProps };
