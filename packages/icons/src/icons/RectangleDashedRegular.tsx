import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedRegularProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedRegular = memo(
  forwardRef<SVGSVGElement, RectangleDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75 0 .49 0 .66.02.8.13 1 .93 1.8 1.94 1.93.13.02.3.02.79.02a.75.75 0 0 1 0 1.5c-.44 0-.73 0-.99-.03a3.75 3.75 0 0 1-3.23-3.23c-.03-.26-.03-.55-.03-.99 0-.41.34-.75.75-.75M14.5 18.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5zM21 15.25c.41 0 .75.34.75.75 0 .44 0 .73-.03.99a3.75 3.75 0 0 1-3.23 3.23c-.26.03-.55.03-.99.03a.75.75 0 0 1 0-1.5c.49 0 .66 0 .8-.02 1-.13 1.8-.93 1.93-1.94.02-.13.02-.3.02-.79 0-.41.34-.75.75-.75M3 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M21 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M6.5 3.75a.75.75 0 0 1 0 1.5c-.49 0-.66 0-.8.02-1 .13-1.8.93-1.93 1.94-.02.13-.02.3-.02.79a.75.75 0 0 1-1.5 0c0-.44 0-.73.03-.99.22-1.68 1.55-3 3.23-3.23.26-.03.55-.03.99-.03M17.5 3.75c.44 0 .73 0 .99.03 1.68.22 3 1.55 3.23 3.23.03.26.03.55.03.99a.75.75 0 0 1-1.5 0c0-.49 0-.66-.02-.8-.13-1-.93-1.8-1.94-1.93a7 7 0 0 0-.79-.02.75.75 0 0 1 0-1.5M14.5 3.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

RectangleDashedRegular.displayName = 'RectangleDashedRegular';

// Triple export pattern (lucide-react style)
export { RectangleDashedRegular, RectangleDashedRegular as RectangleDashedRegularIcon, RectangleDashedRegular as SiRectangleDashedRegular };
export default RectangleDashedRegular;
export type { RectangleDashedRegularProps };
