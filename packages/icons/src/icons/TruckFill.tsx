import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckFillProps = Omit<IconBaseProps, 'children'>;

const TruckFill = memo(
  forwardRef<SVGSVGElement, TruckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="truck-fill" {...props}>
      <path fillRule="evenodd" d="M12 3.63a2.9 2.9 0 0 1 2.88 2.87v.13h2.16c.5 0 1 .18 1.38.5l2.45 2.1c.64.55 1 1.35 1 2.19v3.83c0 1.17-.95 2.13-2.12 2.13h-.4l-.01.12a3.38 3.38 0 0 1-6.68 0l-.01-.12h-2.3l-.01.12a3.38 3.38 0 0 1-6.71-.48 2.9 2.9 0 0 1-1.5-2.52v-8A2.87 2.87 0 0 1 5 3.63zM7 15.38a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.25m9 0A1.6 1.6 0 0 0 14.38 17l.01.25A1.63 1.63 0 1 0 16 15.38m-1.12-1.56a3.37 3.37 0 0 1 4.2 1.8h.67c.2 0 .38-.16.38-.37v-3.83c0-.33-.15-.64-.4-.85l-2.45-2.1a.4.4 0 0 0-.24-.1h-2.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckFill.displayName = 'TruckFill';

// Triple export pattern (lucide-react style)
export { TruckFill, TruckFill as TruckFillIcon, TruckFill as SiTruckFill };
export default TruckFill;
export type { TruckFillProps };
