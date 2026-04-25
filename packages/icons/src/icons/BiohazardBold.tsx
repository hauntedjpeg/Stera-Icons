import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BiohazardBoldProps = Omit<IconBaseProps, 'children'>;

const BiohazardBold = memo(
  forwardRef<SVGSVGElement, BiohazardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.63 2.5A1 1 0 0 1 15 2.13a6 6 0 0 1 2.37 7.88A5.97 5.97 0 0 1 23 16a1 1 0 0 1-2 0 4 4 0 0 0-3.07-3.89q.07.45.07.89a6 6 0 0 1-4 5.65 4 4 0 0 0 5 .81 1 1 0 1 1 1 1.74 6 6 0 0 1-8-1.88 5.97 5.97 0 0 1-8 1.88 1 1 0 0 1 1-1.74 4 4 0 0 0 5-.8 6 6 0 0 1-3.93-6.55A4 4 0 0 0 3 16a1 1 0 0 1-2 0A6 6 0 0 1 6.63 10 5.97 5.97 0 0 1 9 2.13a1 1 0 1 1 1 1.74A4 4 0 0 0 8.15 8.4a6 6 0 0 1 7.7 0A4 4 0 0 0 14 3.87a1 1 0 0 1-.37-1.37M8.1 12.15a4 4 0 0 0 2.82 4.7 4 4 0 0 0 .09-.92l-.01-.25a4 4 0 0 0-2.9-3.53m7.82 0A4 4 0 0 0 13 16.06l.01.25q.03.27.08.54a4 4 0 0 0 2.82-4.7M12 9c-1.1 0-2.1.44-2.82 1.17a4 4 0 0 0 5.64 0A4 4 0 0 0 12 9" clipRule="evenodd" />
    </IconBase>
  ))
);

BiohazardBold.displayName = 'BiohazardBold';

// Triple export pattern (lucide-react style)
export { BiohazardBold, BiohazardBold as BiohazardBoldIcon, BiohazardBold as SiBiohazardBold };
export default BiohazardBold;
export type { BiohazardBoldProps };
