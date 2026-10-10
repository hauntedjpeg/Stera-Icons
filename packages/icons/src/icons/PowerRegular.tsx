import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PowerRegularProps = Omit<IconBaseProps, 'children'>;

const PowerRegular = memo(
  forwardRef<SVGSVGElement, PowerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.13 6.81c.29-.29.76-.29 1.06 0 3.41 3.42 3.41 8.96 0 12.38s-8.96 3.41-12.38 0-3.41-8.96 0-12.38c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.06-2.83 2.84-2.83 7.43 0 10.26s7.43 2.83 10.26 0 2.83-7.42 0-10.26c-.3-.29-.3-.76 0-1.06" />
        <path d="M12 2.25c.41 0 .75.34.75.75v9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PowerRegular.displayName = 'PowerRegular';

// Triple export pattern
export { PowerRegular, PowerRegular as PowerRegularIcon, PowerRegular as SiPowerRegular };
export default PowerRegular;
export type { PowerRegularProps };
