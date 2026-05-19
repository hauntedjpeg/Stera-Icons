import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MilestoneFillProps = Omit<IconBaseProps, 'children'>;

const MilestoneFill = memo(
  forwardRef<SVGSVGElement, MilestoneFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2a1 1 0 0 1 1 1v2.25h4.25c.66 0 1.3.24 1.81.68l3 2.63c.57.5.57 1.38 0 1.88l-3 2.63c-.5.44-1.15.68-1.81.68H13V21a1 1 0 1 1-2 0v-7.25H5A2.75 2.75 0 0 1 2.25 11V8A2.75 2.75 0 0 1 5 5.25h6V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

MilestoneFill.displayName = 'MilestoneFill';

// Triple export pattern (lucide-react style)
export { MilestoneFill, MilestoneFill as MilestoneFillIcon, MilestoneFill as SiMilestoneFill };
export default MilestoneFill;
export type { MilestoneFillProps };
