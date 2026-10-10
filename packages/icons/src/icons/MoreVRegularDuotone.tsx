import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoreVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5" opacity={.4} />
        <path d="M12 21c-.83 0-1.5-.67-1.5-1.5S11.17 18 12 18s1.5.67 1.5 1.5S12.83 21 12 21M12 6c-.83 0-1.5-.67-1.5-1.5S11.17 3 12 3s1.5.67 1.5 1.5S12.83 6 12 6" />
    </IconBase>
  ))
);

MoreVRegularDuotone.displayName = 'MoreVRegularDuotone';

// Triple export pattern
export { MoreVRegularDuotone, MoreVRegularDuotone as MoreVRegularDuotoneIcon, MoreVRegularDuotone as SiMoreVRegularDuotone };
export default MoreVRegularDuotone;
export type { MoreVRegularDuotoneProps };
