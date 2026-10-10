import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineGlassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineGlassBoldDuotone = memo(
  forwardRef<SVGSVGElement, WineGlassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 18c0 1.1.9 2 2 2h1.1c.5.06.9.48.9 1 0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1 0-.52.4-.94.9-1H9c1.1 0 2-.9 2-2v-4.06q.5.06 1 .06t1-.06z" opacity={.4} />
        <path fillRule="evenodd" d="m17.5 2 .16.01h.02l.07.02.03.01.16.06.02.01.06.03.02.02.05.03.04.03.02.02.05.05.03.03.03.03.04.05.02.02q0 .03.03.05l.02.04q.07.14.1.27v.01l.01.03.02.08.06.31q.08.41.18 1.12c.13.93.26 2.23.26 3.67 0 3.48-3.31 6-7 6s-7-2.52-7-6c0-1.44.13-2.74.26-3.67q.1-.71.18-1.12l.06-.31.02-.08v-.03q.03-.16.1-.27l.02-.03q.13-.2.33-.34.02 0 .05-.03l.03-.01.04-.02.07-.03h.01l.03-.02.06-.01h.02l.03-.01.06-.01h.09L6.5 2zM7.33 4l-.09.6C7.12 5.47 7 6.68 7 8c0 2.05 2.06 4 5 4s5-1.95 5-4c0-1.32-.12-2.53-.24-3.4l-.1-.6z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassBoldDuotone.displayName = 'WineGlassBoldDuotone';

// Triple export pattern
export { WineGlassBoldDuotone, WineGlassBoldDuotone as WineGlassBoldDuotoneIcon, WineGlassBoldDuotone as SiWineGlassBoldDuotone };
export default WineGlassBoldDuotone;
export type { WineGlassBoldDuotoneProps };
