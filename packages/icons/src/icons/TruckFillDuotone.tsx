import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckFillDuotone = memo(
  forwardRef<SVGSVGElement, TruckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.63c1.59 0 2.88 1.28 2.88 2.87v.13h2.16c.5 0 1 .18 1.38.5l2.45 2.1c.64.55 1 1.35 1 2.19v3.83c0 1.17-.95 2.13-2.12 2.13h-.4q.02-.19.02-.38 0-.74-.29-1.37h.67c.2 0 .38-.17.38-.38v-3.83c0-.33-.15-.64-.4-.85l-2.45-2.1q-.1-.1-.24-.1h-2.16v5.45q-.2.07-.4.17c-1.1.55-1.86 1.7-1.86 3.01q0 .19.03.38h-2.3q.03-.19.03-.38c0-1.86-1.52-3.37-3.38-3.37S3.63 15.13 3.63 17v.02c-.9-.48-1.5-1.43-1.5-2.52v-8C2.13 4.91 3.4 3.63 5 3.63z" opacity={.4} />
        <path fillRule="evenodd" d="M7 13.63c1.86 0 3.38 1.5 3.38 3.37q0 .26-.04.5c-.25 1.63-1.65 2.88-3.34 2.88-1.71 0-3.12-1.28-3.34-2.93q-.04-.23-.04-.45c0-1.86 1.52-3.37 3.38-3.37m0 1.74c-.9 0-1.62.73-1.62 1.63l.01.22c.1.8.79 1.4 1.61 1.4.81 0 1.49-.6 1.6-1.37q.03-.12.03-.25c0-.9-.73-1.62-1.63-1.62M16 13.63c1.18 0 2.22.6 2.82 1.51q.54.82.55 1.86 0 .26-.03.5c-.25 1.63-1.65 2.88-3.34 2.88-1.7 0-3.1-1.25-3.34-2.88q-.04-.24-.04-.5c0-1.32.76-2.46 1.86-3.01q.7-.37 1.52-.37m0 1.74q-.4 0-.73.18c-.53.27-.9.82-.9 1.45l.02.25c.12.78.8 1.38 1.61 1.38s1.49-.6 1.6-1.38q.02-.12.02-.25-.01-.5-.26-.9c-.3-.44-.8-.73-1.36-.73" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckFillDuotone.displayName = 'TruckFillDuotone';

// Triple export pattern
export { TruckFillDuotone, TruckFillDuotone as TruckFillDuotoneIcon, TruckFillDuotone as SiTruckFillDuotone };
export default TruckFillDuotone;
export type { TruckFillDuotoneProps };
