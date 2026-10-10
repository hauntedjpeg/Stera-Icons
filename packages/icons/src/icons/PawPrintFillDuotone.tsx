import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PawPrintFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PawPrintFillDuotone = memo(
  forwardRef<SVGSVGElement, PawPrintFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 7.63c1.59 0 2.88 1.28 2.88 2.87S5.58 13.38 4 13.38c-1.59 0-2.87-1.3-2.87-2.88C1.13 8.91 2.4 7.63 4 7.63M20 7.63c1.59 0 2.88 1.28 2.88 2.87s-1.3 2.88-2.88 2.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87M8.5 2.63c1.59 0 2.88 1.28 2.88 2.87s-1.3 2.88-2.88 2.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87M15.5 2.63c1.59 0 2.88 1.28 2.88 2.87s-1.3 2.88-2.88 2.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87" opacity={0.4} />
        <path d="M12 9.63c1.25 0 2.15.32 2.83.9.63.56.97 1.28 1.23 1.8q.12.26.54.76c.25.3.62.72.92 1.1.6.75 1.36 1.8 1.36 2.98 0 1.01-.34 2.06-1.04 2.86-.72.83-1.78 1.34-3.11 1.34-.7 0-1.29-.15-1.74-.28-.5-.14-.75-.21-.99-.21s-.5.07-.99.21c-.45.13-1.03.29-1.74.29-1.33 0-2.4-.52-3.11-1.35-.7-.8-1.03-1.85-1.04-2.86 0-1.18.75-2.23 1.36-2.98.3-.38.67-.8.92-1.1q.42-.5.54-.75c.26-.53.6-1.25 1.23-1.8.68-.6 1.58-.91 2.83-.91" />
    </IconBase>
  ))
);

PawPrintFillDuotone.displayName = 'PawPrintFillDuotone';

// Triple export pattern
export { PawPrintFillDuotone, PawPrintFillDuotone as PawPrintFillDuotoneIcon, PawPrintFillDuotone as SiPawPrintFillDuotone };
export default PawPrintFillDuotone;
export type { PawPrintFillDuotoneProps };
