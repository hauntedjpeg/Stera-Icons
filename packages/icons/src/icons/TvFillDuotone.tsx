import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvFillDuotone = memo(
  forwardRef<SVGSVGElement, TvFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.85 17.68q.43.11.9.15l.88.04-.8 2.4c-.15.46-.65.71-1.1.56s-.71-.65-.56-1.1zM19.83 19.72c.15.46-.1.96-.55 1.11s-.96-.1-1.11-.55l-.8-2.41q.48 0 .87-.04.48-.04.91-.15z" />
        <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v2.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={.4} />
    </IconBase>
  ))
);

TvFillDuotone.displayName = 'TvFillDuotone';

// Triple export pattern
export { TvFillDuotone, TvFillDuotone as TvFillDuotoneIcon, TvFillDuotone as SiTvFillDuotone };
export default TvFillDuotone;
export type { TvFillDuotoneProps };
