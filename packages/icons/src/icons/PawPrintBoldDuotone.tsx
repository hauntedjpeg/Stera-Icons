import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PawPrintBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PawPrintBoldDuotone = memo(
  forwardRef<SVGSVGElement, PawPrintBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M20 7.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M8.5 2.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M15.5 2.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M12 9.5c1.27 0 2.2.33 2.9.94.66.57 1.01 1.32 1.27 1.84q.11.24.53.73l.92 1.1c.6.75 1.38 1.84 1.38 3.06 0 1.04-.34 2.12-1.06 2.95-.75.85-1.84 1.38-3.21 1.38-.72 0-1.32-.16-1.77-.29-.5-.14-.74-.21-.96-.21s-.45.07-.96.21c-.45.13-1.05.29-1.77.29-1.37 0-2.46-.53-3.2-1.38C5.33 19.29 5 18.2 5 17.17c0-1.22.78-2.3 1.38-3.06.3-.38.68-.8.92-1.1q.42-.5.53-.73c.26-.52.61-1.27 1.26-1.84.7-.6 1.64-.94 2.91-.94m0 2c-.9 0-1.34.22-1.6.45-.3.26-.49.63-.78 1.21-.19.4-.5.8-.78 1.13-.32.38-.6.69-.9 1.07Q7 16.51 7 17.16c0 .63.2 1.22.57 1.64.35.4.89.7 1.7.7.43 0 .8-.1 1.23-.21.38-.1.93-.29 1.5-.29s1.12.18 1.5.29c.43.12.8.21 1.23.21.81 0 1.35-.3 1.7-.7.36-.42.57-1 .57-1.63q0-.66-.94-1.8c-.3-.4-.58-.7-.9-1.08-.28-.34-.6-.73-.79-1.13-.28-.58-.48-.95-.78-1.21-.25-.23-.68-.45-1.59-.45" clipRule="evenodd" />
    </IconBase>
  ))
);

PawPrintBoldDuotone.displayName = 'PawPrintBoldDuotone';

// Triple export pattern
export { PawPrintBoldDuotone, PawPrintBoldDuotone as PawPrintBoldDuotoneIcon, PawPrintBoldDuotone as SiPawPrintBoldDuotone };
export default PawPrintBoldDuotone;
export type { PawPrintBoldDuotoneProps };
