import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaintPaletteFillProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteFill = memo(
  forwardRef<SVGSVGElement, PaintPaletteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="paint-palette-fill" {...props}>
      <path fillRule="evenodd" d="M11.48 3.27a14 14 0 0 1 8.14 1.4 8 8 0 0 1 2.34 1.89c.55.68.91 1.47.91 2.27 0 2.2-1.5 3.35-2.75 4.06l-.92.5q-.44.21-.77.4c-.5.3-.59.45-.6.49-.08.23-.06.35-.04.44.03.11.1.24.25.47.3.45.83 1.16.84 2.31 0 1.44-1.21 2.34-2.53 2.81-1.37.5-3.22.67-5.3.49-2.15-.2-4.59-1.1-6.5-2.55-1.91-1.43-3.42-3.5-3.42-6a7.9 7.9 0 0 1 2.66-6.08c1.76-1.57 4.35-2.58 7.69-2.9M12 13.63a1.88 1.88 0 1 0 0 3.75 1.88 1.88 0 0 0 0-3.75m-4.5-4.5a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75m8.5-1a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75m-4.5-1a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75" clipRule="evenodd" />
    </IconBase>
  ))
);

PaintPaletteFill.displayName = 'PaintPaletteFill';

// Triple export pattern (lucide-react style)
export { PaintPaletteFill, PaintPaletteFill as PaintPaletteFillIcon, PaintPaletteFill as SiPaintPaletteFill };
export default PaintPaletteFill;
export type { PaintPaletteFillProps };
