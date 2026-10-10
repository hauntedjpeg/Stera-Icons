import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchBoldProps = Omit<IconBaseProps, 'children'>;

const CircleNotchBold = memo(
  forwardRef<SVGSVGElement, CircleNotchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.66 4.93c.39-.4 1.02-.4 1.41 0 1.4 1.4 2.35 3.18 2.74 5.12.38 1.94.19 3.95-.57 5.78-.76 1.82-2.04 3.39-3.68 4.48S13.98 22 12 22s-3.91-.59-5.56-1.69-2.92-2.66-3.68-4.48-.95-3.84-.57-5.78c.39-1.94 1.34-3.72 2.74-5.12.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-1.12 1.12-1.88 2.55-2.19 4.1-.3 1.55-.15 3.16.46 4.62.6 1.46 1.63 2.71 2.95 3.6C8.87 19.52 10.42 20 12 20s3.13-.47 4.44-1.35 2.35-2.13 2.95-3.59.77-3.07.46-4.62-1.07-2.98-2.2-4.1c-.38-.39-.38-1.02 0-1.41" />
    </IconBase>
  ))
);

CircleNotchBold.displayName = 'CircleNotchBold';

// Triple export pattern
export { CircleNotchBold, CircleNotchBold as CircleNotchBoldIcon, CircleNotchBold as SiCircleNotchBold };
export default CircleNotchBold;
export type { CircleNotchBoldProps };
