import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaintPaletteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteFillDuotone = memo(
  forwardRef<SVGSVGElement, PaintPaletteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.48 3.26a14 14 0 0 1 8.14 1.41 8 8 0 0 1 2.34 1.88c.55.69.91 1.48.91 2.28 0 2.2-1.5 3.35-2.75 4.06l-.92.5q-.44.2-.77.4c-.5.3-.59.45-.6.49-.08.22-.06.35-.04.43.03.12.1.25.25.48.3.45.83 1.16.84 2.3 0 1.44-1.21 2.35-2.53 2.82-1.37.5-3.22.67-5.3.49-2.15-.2-4.59-1.11-6.5-2.55s-3.42-3.5-3.42-6a7.9 7.9 0 0 1 2.66-6.08c1.76-1.57 4.35-2.58 7.69-2.9M12 13.63a1.88 1.88 0 1 0 0 3.75 1.88 1.88 0 0 0 0-3.75m-4.5-4.5a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75m8.5-1a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75m-4.5-1a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.63a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.75M7.5 9.13a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.76M16 8.13a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M11.5 7.13a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

PaintPaletteFillDuotone.displayName = 'PaintPaletteFillDuotone';

// Triple export pattern (lucide-react style)
export { PaintPaletteFillDuotone, PaintPaletteFillDuotone as PaintPaletteFillDuotoneIcon, PaintPaletteFillDuotone as SiPaintPaletteFillDuotone };
export default PaintPaletteFillDuotone;
export type { PaintPaletteFillDuotoneProps };
