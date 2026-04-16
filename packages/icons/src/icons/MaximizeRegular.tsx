import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MaximizeRegularProps = Omit<IconBaseProps, 'children'>;

const MaximizeRegular = memo(
  forwardRef<SVGSVGElement, MaximizeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v1.75c0 1.1.9 2 2 2H8a.75.75 0 0 1 0 1.5H6.25a3.5 3.5 0 0 1-3.5-3.5V16c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v1.75a3.5 3.5 0 0 1-3.5 3.5H16a.75.75 0 0 1 0-1.5h1.75a2 2 0 0 0 2-2V16c0-.41.34-.75.75-.75M8 2.75a.75.75 0 0 1 0 1.5H6.25a2 2 0 0 0-2 2V8a.75.75 0 0 1-1.5 0V6.25a3.5 3.5 0 0 1 3.5-3.5zM17.75 2.75a3.5 3.5 0 0 1 3.5 3.5V8a.75.75 0 0 1-1.5 0V6.25a2 2 0 0 0-2-2H16a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MaximizeRegular.displayName = 'MaximizeRegular';

// Triple export pattern (lucide-react style)
export { MaximizeRegular, MaximizeRegular as MaximizeRegularIcon, MaximizeRegular as SiMaximizeRegular };
export default MaximizeRegular;
export type { MaximizeRegularProps };
