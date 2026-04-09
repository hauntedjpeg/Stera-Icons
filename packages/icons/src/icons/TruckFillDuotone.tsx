import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TruckFillDuotone = memo(
  forwardRef<SVGSVGElement, TruckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-fill-duotone" {...props}>
      <path d="M12 3.63a2.9 2.9 0 0 1 2.88 2.87v.13h2.16c.5 0 1 .18 1.38.5l2.45 2.1c.64.55 1 1.35 1 2.19v3.83c0 1.17-.95 2.13-2.12 2.13h-.4a3.4 3.4 0 0 0-.27-1.75h.67c.2 0 .38-.17.38-.38v-3.83c0-.33-.15-.64-.4-.85l-2.45-2.1a.4.4 0 0 0-.24-.1h-2.16v5.45a3.35 3.35 0 0 0-2.23 3.56h-2.3q.03-.19.03-.38a3.37 3.37 0 1 0-6.76 0v.02a2.9 2.9 0 0 1-1.5-2.52v-8A2.87 2.87 0 0 1 5 3.63z" opacity={.4} />
        <path fillRule="evenodd" d="M7 13.63a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.75m0 1.74a1.62 1.62 0 1 0 0 3.25 1.62 1.62 0 0 0 0-3.25M16 13.63a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.75m0 1.74A1.6 1.6 0 0 0 14.38 17l.01.25A1.63 1.63 0 1 0 16 15.38" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckFillDuotone.displayName = 'TruckFillDuotone';

// Triple export pattern (lucide-react style)
export { TruckFillDuotone, TruckFillDuotone as TruckFillDuotoneIcon, TruckFillDuotone as SiTruckFillDuotone };
export default TruckFillDuotone;
export type { TruckFillDuotoneProps };
