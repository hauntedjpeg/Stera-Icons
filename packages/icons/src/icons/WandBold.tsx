import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WandBoldProps = Omit<IconBaseProps, 'children'>;

const WandBold = memo(
  forwardRef<SVGSVGElement, WandBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M15.51 7.13c.4-.22.88-.15 1.2.16.31.32.38.8.16 1.2L15.8 10.4c-.56 1-.56 2.2 0 3.2l1.07 1.91c.22.4.15.88-.16 1.2-.32.31-.8.38-1.2.16L13.6 15.8c-1-.55-2.2-.56-3.2 0l-1.19.67q-.6.34-1.09.82l-3.91 3.92c-.17.17-.4.26-.61.29h-.2q-.34-.04-.6-.3c-.4-.38-.4-1.02 0-1.4l3.9-3.92q.49-.49.83-1.1l.67-1.18c.56-1 .56-2.2 0-3.2L7.13 8.5c-.22-.4-.15-.88.16-1.2.32-.31.8-.38 1.2-.16L10.4 8.2c1 .56 2.2.56 3.2 0zm-1.86 3.22c-1.07.35-2.23.35-3.3 0 .35 1.07.35 2.23 0 3.3 1.07-.36 2.23-.35 3.3 0-.35-1.07-.36-2.23 0-3.3" clipRule="evenodd" />
        <path d="M17.8 17.8c.38-.4 1.02-.4 1.4 0l1 1c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-1-1c-.4-.38-.4-1.02 0-1.4M6 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1zM12 2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1M3.8 3.8c.38-.4 1.02-.4 1.4 0l1 1c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-1-1c-.4-.38-.4-1.02 0-1.4M18.8 3.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-1 1c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4z" />
    </IconBase>
  ))
);

WandBold.displayName = 'WandBold';

// Triple export pattern
export { WandBold, WandBold as WandBoldIcon, WandBold as SiWandBold };
export default WandBold;
export type { WandBoldProps };
