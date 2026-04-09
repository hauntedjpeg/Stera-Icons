import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PawPrintFillProps = Omit<IconBaseProps, 'children'>;

const PawPrintFill = memo(
  forwardRef<SVGSVGElement, PawPrintFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="paw-print-fill" {...props}>
      <path d="M12 9.63a4 4 0 0 1 2.83.9c.63.56.97 1.28 1.23 1.8q.12.26.54.76c.25.3.62.72.92 1.1.6.75 1.36 1.8 1.36 2.98 0 1.01-.34 2.06-1.04 2.86a4 4 0 0 1-3.11 1.34c-.7 0-1.29-.15-1.74-.28-.5-.14-.75-.21-.99-.21s-.5.07-.99.21c-.45.13-1.03.29-1.74.29-1.33 0-2.4-.52-3.11-1.35a4.4 4.4 0 0 1-1.04-2.86c0-1.18.75-2.23 1.36-2.98.3-.38.67-.8.92-1.1q.42-.5.54-.75c.26-.53.6-1.25 1.23-1.8A4 4 0 0 1 12 9.63M4 7.63a2.87 2.87 0 1 1 0 5.74 2.87 2.87 0 0 1 0-5.74M20 7.63a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.76M8.5 2.63a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.76M15.5 2.63a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.76" />
    </IconBase>
  ))
);

PawPrintFill.displayName = 'PawPrintFill';

// Triple export pattern (lucide-react style)
export { PawPrintFill, PawPrintFill as PawPrintFillIcon, PawPrintFill as SiPawPrintFill };
export default PawPrintFill;
export type { PawPrintFillProps };
