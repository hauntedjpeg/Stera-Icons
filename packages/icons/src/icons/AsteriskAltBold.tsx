import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltBoldProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltBold = memo(
  forwardRef<SVGSVGElement, AsteriskAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c.6 0 1.16.21 1.55.59.39.37.58.88.45 1.41l-.19.8q-.5 2.2-.69 4.4c-.03.4.42.67.75.43q1.8-1.27 3.47-2.8l.6-.56c.39-.38.93-.46 1.45-.31.51.14.98.53 1.28 1.04.3.52.4 1.12.27 1.64-.14.52-.48.95-1 1.1l-.8.23q-2.13.67-4.13 1.6c-.38.18-.38.7 0 .87q1.98.93 4.13 1.6l.8.23c.52.15.86.58 1 1.1.12.52.02 1.12-.28 1.63-.3.52-.76.9-1.28 1.05s-1.06.07-1.45-.31l-.6-.57q-1.65-1.52-3.46-2.79c-.33-.23-.78.03-.75.44q.2 2.19.7 4.38.08.4.18.8c.13.53-.06 1.04-.45 1.41-.39.38-.95.59-1.55.59s-1.16-.21-1.55-.59c-.39-.37-.58-.88-.45-1.41l.19-.8q.49-2.19.68-4.38c.04-.4-.41-.67-.75-.43q-1.8 1.26-3.44 2.78l-.6.57c-.4.38-.93.46-1.45.31-.52-.14-.98-.53-1.28-1.05-.3-.51-.4-1.1-.27-1.63s.47-.95 1-1.1l.79-.23Q7 13.37 9 12.44c.37-.18.37-.7 0-.87q-2-.93-4.15-1.6l-.79-.23c-.52-.15-.86-.58-1-1.1-.13-.52-.03-1.12.27-1.64s.77-.9 1.29-1.04c.51-.15 1.05-.07 1.44.31l.6.57q1.65 1.51 3.46 2.79c.33.23.78-.03.75-.44q-.2-2.2-.69-4.39L10 4c-.13-.53.06-1.04.45-1.41C10.84 2.2 11.4 2 12 2" />
    </IconBase>
  ))
);

AsteriskAltBold.displayName = 'AsteriskAltBold';

// Triple export pattern
export { AsteriskAltBold, AsteriskAltBold as AsteriskAltBoldIcon, AsteriskAltBold as SiAsteriskAltBold };
export default AsteriskAltBold;
export type { AsteriskAltBoldProps };
