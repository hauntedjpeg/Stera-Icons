import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletHalfBoldProps = Omit<IconBaseProps, 'children'>;

const DropletHalfBold = memo(
  forwardRef<SVGSVGElement, DropletHalfBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m12 2 .15.01h.03l.15.05.15.06.05.03.06.04.04.04h.01l.08.07.24.2.82.74c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6c.7 1.3 1.21 2.75 1.21 4.2 0 4.58-3.53 8.37-8 8.37s-8-3.8-8-8.36c0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61.9-1.06 1.8-1.96 2.48-2.59l.82-.74.24-.2.08-.07.1-.08.06-.03.14-.06h.01l.15-.04h.03Q11.93 2 12 2m-.41 2.7c-.64.6-1.49 1.44-2.33 2.43s-1.67 2.1-2.28 3.25C6.36 11.53 6 12.64 6 13.64c0 3.45 2.57 6.18 5.7 6.35l.3.01V4.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletHalfBold.displayName = 'DropletHalfBold';

// Triple export pattern
export { DropletHalfBold, DropletHalfBold as DropletHalfBoldIcon, DropletHalfBold as SiDropletHalfBold };
export default DropletHalfBold;
export type { DropletHalfBoldProps };
