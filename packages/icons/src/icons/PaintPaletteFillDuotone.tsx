import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaintPaletteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteFillDuotone = memo(
  forwardRef<SVGSVGElement, PaintPaletteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.48 3.26c3.38-.33 6.16.34 8.14 1.41q1.48.83 2.34 1.88c.55.69.91 1.48.91 2.28 0 2.2-1.5 3.35-2.75 4.06l-.92.5q-.44.2-.77.4c-.5.3-.59.45-.6.49-.08.22-.06.35-.04.43.03.12.1.25.25.48.3.45.83 1.16.84 2.3 0 1.44-1.21 2.35-2.53 2.82-1.37.5-3.22.67-5.3.49-2.15-.2-4.59-1.11-6.5-2.55s-3.42-3.5-3.42-6c0-2.37.87-4.49 2.66-6.08 1.76-1.57 4.35-2.58 7.69-2.9M12 13.63c-1.04 0-1.87.83-1.87 1.87s.83 1.88 1.87 1.88 1.88-.84 1.88-1.88-.84-1.87-1.88-1.87m-4.5-4.5c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m8.5-1c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m-4.5-1c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37" clipRule="evenodd" opacity={.4} />
        <path d="M12 13.63c1.04 0 1.88.83 1.88 1.87s-.84 1.88-1.88 1.88-1.87-.84-1.87-1.88.83-1.87 1.87-1.87M7.5 9.13c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37M16 8.13c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37M11.5 7.13c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37" />
    </IconBase>
  ))
);

PaintPaletteFillDuotone.displayName = 'PaintPaletteFillDuotone';

// Triple export pattern
export { PaintPaletteFillDuotone, PaintPaletteFillDuotone as PaintPaletteFillDuotoneIcon, PaintPaletteFillDuotone as SiPaintPaletteFillDuotone };
export default PaintPaletteFillDuotone;
export type { PaintPaletteFillDuotoneProps };
