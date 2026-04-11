import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvFillProps = Omit<IconBaseProps, 'children'>;

const TvFill = memo(
  forwardRef<SVGSVGElement, TvFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v2.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-2.3 1.92l.68 2.04a.88.88 0 0 1-1.66.56l-.8-2.41H6.63l-.8 2.4a.88.88 0 0 1-1.66-.55l.68-2.04a3.88 3.88 0 0 1-2.3-1.92 4 4 0 0 1-.38-1.52q-.06-.8-.04-2.04V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
    </IconBase>
  ))
);

TvFill.displayName = 'TvFill';

// Triple export pattern (lucide-react style)
export { TvFill, TvFill as TvFillIcon, TvFill as SiTvFill };
export default TvFill;
export type { TvFillProps };
