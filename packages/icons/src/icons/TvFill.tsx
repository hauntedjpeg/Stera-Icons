import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvFillProps = Omit<IconBaseProps, 'children'>;

const TvFill = memo(
  forwardRef<SVGSVGElement, TvFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v2.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.29.15-.6.22l.68 2.04c.15.46-.1.96-.55 1.11s-.96-.1-1.11-.55l-.8-2.41H6.63l-.8 2.4c-.15.46-.65.71-1.1.56s-.71-.65-.56-1.1l.68-2.05q-.32-.08-.6-.23-1.13-.57-1.7-1.7c-.24-.46-.34-.95-.38-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
    </IconBase>
  ))
);

TvFill.displayName = 'TvFill';

// Triple export pattern
export { TvFill, TvFill as TvFillIcon, TvFill as SiTvFill };
export default TvFill;
export type { TvFillProps };
