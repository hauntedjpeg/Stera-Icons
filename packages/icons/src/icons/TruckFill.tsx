import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TruckFillProps = Omit<IconBaseProps, 'children'>;

const TruckFill = memo(
  forwardRef<SVGSVGElement, TruckFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.63c1.59 0 2.88 1.28 2.88 2.87v.13h2.16c.5 0 1 .18 1.38.5l2.45 2.1c.64.55 1 1.35 1 2.19v3.83c0 1.17-.95 2.13-2.12 2.13h-.4l-.01.12c-.25 1.63-1.65 2.88-3.34 2.88-1.7 0-3.1-1.25-3.34-2.88l-.01-.12h-2.3l-.01.12c-.25 1.63-1.65 2.88-3.34 2.88-1.71 0-3.12-1.28-3.34-2.93l-.04-.43c-.89-.48-1.5-1.43-1.5-2.52v-8c0-1.59 1.3-2.87 2.88-2.87zM7 15.38c-.9 0-1.62.72-1.62 1.62l.01.22c.1.8.79 1.4 1.61 1.4.81 0 1.49-.6 1.6-1.37q.03-.12.03-.25c0-.9-.73-1.62-1.63-1.62m9 0q-.4 0-.73.17c-.53.27-.9.82-.9 1.45l.02.25c.12.78.8 1.38 1.61 1.38s1.49-.6 1.6-1.38q.02-.12.02-.25-.01-.5-.26-.9c-.3-.44-.8-.73-1.36-.73m-1.12-1.56q.53-.2 1.12-.2c1.18 0 2.22.61 2.82 1.52q.15.24.26.48h.67c.2 0 .38-.16.38-.37v-3.83c0-.33-.15-.64-.4-.85l-2.45-2.1q-.1-.1-.24-.1h-2.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

TruckFill.displayName = 'TruckFill';

// Triple export pattern
export { TruckFill, TruckFill as TruckFillIcon, TruckFill as SiTruckFill };
export default TruckFill;
export type { TruckFillProps };
