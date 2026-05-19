import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PowerRegularProps = Omit<IconBaseProps, 'children'>;

const PowerRegular = memo(
  forwardRef<SVGSVGElement, PowerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.13 6.81c.29-.29.76-.29 1.06 0a8.75 8.75 0 1 1-12.38 0 .75.75 0 0 1 1.06 1.06 7.25 7.25 0 1 0 10.26 0 .75.75 0 0 1 0-1.06" />
        <path d="M12 2.25c.41 0 .75.34.75.75v9a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PowerRegular.displayName = 'PowerRegular';

// Triple export pattern (lucide-react style)
export { PowerRegular, PowerRegular as PowerRegularIcon, PowerRegular as SiPowerRegular };
export default PowerRegular;
export type { PowerRegularProps };
