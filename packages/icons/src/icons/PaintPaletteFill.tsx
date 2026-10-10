import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaintPaletteFillProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteFill = memo(
  forwardRef<SVGSVGElement, PaintPaletteFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.48 3.27c3.38-.34 6.16.33 8.14 1.4q1.48.84 2.34 1.89c.55.68.91 1.47.91 2.27 0 2.2-1.5 3.35-2.75 4.06l-.92.5q-.44.21-.77.4c-.5.3-.59.45-.6.49-.08.23-.06.35-.04.44.03.11.1.24.25.47.3.45.83 1.16.84 2.31 0 1.44-1.21 2.34-2.53 2.81-1.37.5-3.22.67-5.3.49-2.15-.2-4.59-1.1-6.5-2.55-1.91-1.43-3.42-3.5-3.42-6 0-2.37.87-4.48 2.66-6.08 1.76-1.57 4.35-2.58 7.69-2.9M12 13.63c-1.04 0-1.87.84-1.87 1.87s.83 1.88 1.87 1.88 1.88-.84 1.88-1.88c0-1.03-.84-1.87-1.88-1.87m-4.5-4.5c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m8.5-1c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m-4.5-1c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37" clipRule="evenodd" />
    </IconBase>
  ))
);

PaintPaletteFill.displayName = 'PaintPaletteFill';

// Triple export pattern
export { PaintPaletteFill, PaintPaletteFill as PaintPaletteFillIcon, PaintPaletteFill as SiPaintPaletteFill };
export default PaintPaletteFill;
export type { PaintPaletteFillProps };
