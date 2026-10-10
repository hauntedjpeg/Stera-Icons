import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlameBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m12 2 .15.01h.03l.15.05.15.06.05.03.06.04.04.04h.01l.08.07.24.2.82.74c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6c.7 1.3 1.21 2.75 1.21 4.2 0 4.58-3.53 8.37-8 8.37s-8-3.8-8-8.36c0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61.9-1.06 1.8-1.96 2.48-2.59l.82-.74.24-.2.08-.07.1-.08.06-.03.14-.06h.01l.15-.04h.03Q11.93 2 12 2m-.41 2.7c-.64.6-1.49 1.44-2.33 2.43s-1.67 2.1-2.28 3.25C6.36 11.53 6 12.64 6 13.64 6 17.2 8.73 20 12 20s6-2.8 6-6.36c0-1-.36-2.11-.98-3.27-.6-1.14-1.43-2.25-2.28-3.24s-1.7-1.83-2.33-2.43L12 4.33z" clipRule="evenodd" />
        <path d="m12.09 10.5.06.01h.03l.06.02h.03l.06.03h.03l.05.03.03.02.05.02.03.01.13.1.02.01.03.04.13.1.42.42c.35.35.82.85 1.29 1.45.9 1.17 1.96 2.9 1.96 4.74l-.01.36C15.38 19.18 13.77 20 12 20c.55 0 1.2-.19 1.68-.59.45-.37.82-.96.82-1.91 0-1.15-.7-2.43-1.54-3.51q-.53-.66-.96-1.1-.43.44-.96 1.1c-.85 1.08-1.54 2.36-1.54 3.51 0 .95.37 1.54.82 1.91.49.4 1.13.59 1.68.59-1.77 0-3.38-.82-4.49-2.14l-.01-.36c0-1.85 1.06-3.57 1.96-4.74.47-.6.94-1.1 1.29-1.45q.26-.27.42-.41l.13-.11.03-.04h.01l.01-.01.13-.1h.03l.01-.02.06-.03.06-.02.03-.01.06-.02.03-.01.06-.01h.02l.07-.02z" opacity={.4} />
    </IconBase>
  ))
);

FlameBoldDuotone.displayName = 'FlameBoldDuotone';

// Triple export pattern
export { FlameBoldDuotone, FlameBoldDuotone as FlameBoldDuotoneIcon, FlameBoldDuotone as SiFlameBoldDuotone };
export default FlameBoldDuotone;
export type { FlameBoldDuotoneProps };
