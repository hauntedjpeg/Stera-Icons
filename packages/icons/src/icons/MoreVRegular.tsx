import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVRegularProps = Omit<IconBaseProps, 'children'>;

const MoreVRegular = memo(
  forwardRef<SVGSVGElement, MoreVRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18c.83 0 1.5.67 1.5 1.5S12.83 21 12 21s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 3c.83 0 1.5.67 1.5 1.5S12.83 6 12 6s-1.5-.67-1.5-1.5S11.17 3 12 3" />
    </IconBase>
  ))
);

MoreVRegular.displayName = 'MoreVRegular';

// Triple export pattern
export { MoreVRegular, MoreVRegular as MoreVRegularIcon, MoreVRegular as SiMoreVRegular };
export default MoreVRegular;
export type { MoreVRegularProps };
