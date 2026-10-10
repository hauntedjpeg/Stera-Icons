import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpRegularProps = Omit<IconBaseProps, 'children'>;

const TrendUpRegular = memo(
  forwardRef<SVGSVGElement, TrendUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.97 18.78c.29.3.76.3 1.06 0l6.7-6.62 2.65 2.6c.29.3.76.3 1.05 0l7.32-7.22v3.21c0 .41.34.75.75.75s.75-.34.75-.75v-5l-.01-.13v-.01l-.02-.07-.03-.07q0-.05-.04-.08 0-.03-.03-.05v-.02l-.09-.1-.1-.09-.14-.07-.05-.02Q21.64 5 21.5 5h-5c-.41 0-.75.34-.75.75s.34.75.75.75h3.17l-6.77 6.68-2.64-2.6c-.29-.3-.76-.3-1.05 0l-7.24 7.14c-.3.29-.3.76 0 1.06" />
    </IconBase>
  ))
);

TrendUpRegular.displayName = 'TrendUpRegular';

// Triple export pattern
export { TrendUpRegular, TrendUpRegular as TrendUpRegularIcon, TrendUpRegular as SiTrendUpRegular };
export default TrendUpRegular;
export type { TrendUpRegularProps };
