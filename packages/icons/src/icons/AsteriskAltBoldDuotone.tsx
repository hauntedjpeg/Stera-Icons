import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 13.16 1.06.67q.15 2.69.75 5.37l.19.8c.13.53-.06 1.04-.45 1.41-.39.38-.95.59-1.55.59s-1.16-.21-1.55-.59c-.39-.37-.58-.88-.45-1.41l.19-.8q.6-2.7.75-5.37zM4.62 5.95c.52-.15 1.06-.06 1.45.32l.6.56q2.02 1.86 4.27 3.34.04.62.05 1.25-.54.3-1.1.58-2.4-1.2-5.03-2.03l-.79-.24c-.52-.15-.87-.57-1-1.1-.13-.52-.03-1.11.27-1.63s.76-.9 1.28-1.05M17.93 6.27c.4-.38.93-.47 1.45-.32s.98.53 1.28 1.05.4 1.11.27 1.64-.48.94-1 1.1l-.79.23q-2.62.81-5.03 2.03l-1.1-.58q0-.63.05-1.25 2.25-1.48 4.27-3.34z" opacity={0.4} />
        <path d="M12 2c.6 0 1.16.21 1.55.59.39.37.58.88.45 1.41l-.19.8q-.74 3.3-.8 6.62 2.9 1.6 6.13 2.61l.79.24c.52.15.87.57 1 1.1.13.52.03 1.11-.27 1.63s-.76.9-1.28 1.05-1.06.06-1.45-.32l-.6-.56q-2.5-2.3-5.33-4-2.84 1.7-5.33 4l-.6.56c-.39.38-.93.47-1.45.32s-.98-.53-1.28-1.05-.4-1.11-.27-1.63c.13-.53.48-.95 1-1.1l.79-.24q3.24-1 6.13-2.61-.05-3.31-.8-6.62L10 4c-.13-.53.06-1.04.45-1.41C10.84 2.2 11.4 2 12 2" />
    </IconBase>
  ))
);

AsteriskAltBoldDuotone.displayName = 'AsteriskAltBoldDuotone';

// Triple export pattern
export { AsteriskAltBoldDuotone, AsteriskAltBoldDuotone as AsteriskAltBoldDuotoneIcon, AsteriskAltBoldDuotone as SiAsteriskAltBoldDuotone };
export default AsteriskAltBoldDuotone;
export type { AsteriskAltBoldDuotoneProps };
