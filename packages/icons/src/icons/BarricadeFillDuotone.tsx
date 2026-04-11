import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BarricadeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BarricadeFillDuotone = memo(
  forwardRef<SVGSVGElement, BarricadeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.2 14.88h1.67V19a.88.88 0 0 1-1.74 0v-4.13zM18.86 14.87l.02.13v4a.88.88 0 0 1-1.75 0v-4.12h1.73M7.14 5.88l7.25 7.25H9.86L3.08 6.35q.16-.23.4-.35c.08-.04.2-.08.48-.1.29-.02.67-.03 1.24-.03zM18.8 5.88c.57 0 .95 0 1.24.02.28.02.4.06.47.1q.32.16.5.49c.03.07.07.19.1.47l.02 1.24v2.19L16.6 5.87z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.8 4.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v2.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H5.2q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.04-.55-.03-1.38V8.2q0-.77.02-1.31l-.02-.03V6.5A2.37 2.37 0 0 1 3.5 4.13zM2.88 10.8c0 .57 0 .95.02 1.24.02.28.06.4.1.47q.16.32.49.5c.07.03.19.07.47.1l1.24.02h2.19L2.88 8.6zM5.2 5.87c-.57 0-.95 0-1.24.03-.28.02-.4.06-.47.1q-.25.12-.4.35l6.77 6.78h4.53L7.14 5.87zm11.66 7.26h1.94c.57 0 .95 0 1.24-.03.28-.02.4-.06.47-.1q.25-.12.4-.35l-6.77-6.77H9.6zm4.27-2.74V8.2c0-.57 0-.95-.03-1.24-.02-.28-.06-.4-.1-.47q-.16-.32-.49-.5a1 1 0 0 0-.47-.1 17 17 0 0 0-1.24-.01h-2.19z" clipRule="evenodd" />
    </IconBase>
  ))
);

BarricadeFillDuotone.displayName = 'BarricadeFillDuotone';

// Triple export pattern (lucide-react style)
export { BarricadeFillDuotone, BarricadeFillDuotone as BarricadeFillDuotoneIcon, BarricadeFillDuotone as SiBarricadeFillDuotone };
export default BarricadeFillDuotone;
export type { BarricadeFillDuotoneProps };
