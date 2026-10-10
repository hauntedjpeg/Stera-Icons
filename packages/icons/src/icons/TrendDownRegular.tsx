import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownRegularProps = Omit<IconBaseProps, 'children'>;

const TrendDownRegular = memo(
  forwardRef<SVGSVGElement, TrendDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.97 5.22c.29-.3.76-.3 1.06 0l6.7 6.62 2.65-2.6c.29-.3.76-.3 1.05 0l7.32 7.22v-3.21c0-.41.34-.75.75-.75s.75.34.75.75v5l-.01.13v.01l-.02.07-.03.07q0 .05-.04.08 0 .03-.03.05v.02l-.09.1-.1.09-.14.07-.05.02q-.1.03-.24.04h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.17l-6.77-6.68-2.64 2.6c-.29.3-.76.3-1.05 0L1.97 6.29c-.3-.29-.3-.76 0-1.06" />
    </IconBase>
  ))
);

TrendDownRegular.displayName = 'TrendDownRegular';

// Triple export pattern
export { TrendDownRegular, TrendDownRegular as TrendDownRegularIcon, TrendDownRegular as SiTrendDownRegular };
export default TrendDownRegular;
export type { TrendDownRegularProps };
