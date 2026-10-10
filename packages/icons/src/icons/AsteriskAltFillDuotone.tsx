import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltFillDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.53q.72.44 1.4.9.17 2.16.62 4.32l.17.75c.13.58-.08 1.14-.5 1.55-.43.4-1.04.64-1.69.64s-1.26-.23-1.69-.64-.63-.97-.5-1.55l.17-.75q.45-2.16.61-4.31.69-.48 1.41-.91M5 6.02c.57-.16 1.16-.07 1.6.34l.57.51q1.64 1.47 3.42 2.7.07.82.09 1.67-.75.4-1.5.76-1.95-.94-4.04-1.62l-.73-.24c-.57-.17-.94-.63-1.09-1.2-.14-.58-.03-1.22.3-1.78S4.43 6.18 5 6.02M17.4 6.36c.44-.41 1.03-.5 1.6-.34.56.16 1.07.57 1.39 1.14s.43 1.2.29 1.78c-.15.57-.52 1.03-1.1 1.2l-.72.23q-2.1.69-4.05 1.63-.75-.37-1.49-.76.02-.84.09-1.68 1.78-1.21 3.43-2.68z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.31c.65 0 1.26.23 1.69.64s.63.97.5 1.55l-.17.75q-.63 3-.7 5.99 2.63 1.43 5.54 2.38l.73.24c.57.17.94.63 1.09 1.2.14.58.03 1.22-.29 1.78-.33.57-.83.98-1.4 1.14s-1.15.07-1.59-.34l-.56-.52q-2.28-2.04-4.84-3.6-2.55 1.58-4.84 3.6l-.56.52c-.44.41-1.03.5-1.6.34-.56-.16-1.07-.57-1.39-1.14s-.43-1.2-.29-1.78c.15-.57.52-1.03 1.1-1.2l.72-.24q2.91-.95 5.54-2.38-.07-3-.7-5.99-.07-.37-.17-.75c-.13-.58.08-1.14.5-1.55.43-.4 1.04-.64 1.69-.64" clipRule="evenodd" />
    </IconBase>
  ))
);

AsteriskAltFillDuotone.displayName = 'AsteriskAltFillDuotone';

// Triple export pattern
export { AsteriskAltFillDuotone, AsteriskAltFillDuotone as AsteriskAltFillDuotoneIcon, AsteriskAltFillDuotone as SiAsteriskAltFillDuotone };
export default AsteriskAltFillDuotone;
export type { AsteriskAltFillDuotoneProps };
