import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaintPaletteRegularProps = Omit<IconBaseProps, 'children'>;

const PaintPaletteRegular = memo(
  forwardRef<SVGSVGElement, PaintPaletteRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.75c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75-1.75-.78-1.75-1.75.78-1.75 1.75-1.75M7.5 9.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25c0-.7.56-1.25 1.25-1.25M16 8.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25c0-.7.56-1.25 1.25-1.25M11.5 7.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25c0-.7.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M11.5 3.39c3.34-.34 6.1.33 8.06 1.4q1.47.8 2.3 1.84c.54.67.89 1.44.89 2.2 0 2.13-1.45 3.24-2.69 3.95q-.47.27-.92.49l-.77.41c-.5.3-.63.47-.66.55q-.1.36-.04.51c.04.14.11.28.27.52.3.45.81 1.13.81 2.24 0 1.35-1.14 2.22-2.44 2.69-1.35.48-3.19.66-5.25.48-2.13-.19-4.54-1.1-6.44-2.52-1.89-1.42-3.37-3.45-3.37-5.9 0-2.34.86-4.42 2.62-5.99 1.74-1.55 4.3-2.55 7.62-2.87m7.34 2.7c-1.66-.9-4.12-1.52-7.2-1.21-3.12.3-5.34 1.23-6.77 2.5s-2.12 2.93-2.12 4.86c0 1.81 1.1 3.45 2.77 4.71 1.68 1.26 3.83 2.06 5.68 2.23 1.92.17 3.52-.01 4.6-.4 1.14-.41 1.45-.93 1.45-1.28 0-.6-.24-.92-.56-1.42-.16-.24-.36-.56-.47-.95q-.18-.62.07-1.37c.22-.67.83-1.08 1.32-1.37q.42-.23.85-.45l.86-.46c1.13-.65 1.93-1.37 1.93-2.65 0-.3-.15-.75-.56-1.26-.4-.5-1.02-1.02-1.85-1.47" clipRule="evenodd" />
    </IconBase>
  ))
);

PaintPaletteRegular.displayName = 'PaintPaletteRegular';

// Triple export pattern
export { PaintPaletteRegular, PaintPaletteRegular as PaintPaletteRegularIcon, PaintPaletteRegular as SiPaintPaletteRegular };
export default PaintPaletteRegular;
export type { PaintPaletteRegularProps };
