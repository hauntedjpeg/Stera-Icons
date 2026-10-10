import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.77 6.78c.43-.35 1.06-.29 1.4.14.97 1.17 1.58 2.59 1.77 4.1s-.06 3.02-.7 4.4c-.65 1.37-1.68 2.53-2.96 3.34-1.2.76-2.58 1.18-4 1.23L12 20h-.59l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-3-3c-.39-.38-.39-1.02 0-1.4l3-3c.4-.4 1.03-.4 1.42 0 .39.38.39 1.02 0 1.4L11.4 18H12c1.14 0 2.25-.32 3.21-.93s1.73-1.48 2.22-2.5c.48-1.04.66-2.18.52-3.31s-.6-2.2-1.32-3.07c-.35-.43-.29-1.06.14-1.4" opacity={.4} />
        <path d="M11.3 1.3c.38-.4 1.02-.4 1.4 0l3 3c.4.38.4 1.02 0 1.4l-3 3c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4L12.58 6h-.8c-1.07.04-2.1.36-3 .93-.97.61-1.73 1.49-2.22 2.52-.48 1.03-.67 2.17-.52 3.3.14 1.13.6 2.2 1.33 3.07.35.43.29 1.06-.14 1.41-.42.35-1.05.3-1.4-.13-.97-1.17-1.59-2.6-1.78-4.1s.06-3.03.7-4.4c.65-1.38 1.67-2.54 2.95-3.36C9 4.44 10.48 4 12 4h.59l-1.3-1.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

RotationRightBoldDuotone.displayName = 'RotationRightBoldDuotone';

// Triple export pattern
export { RotationRightBoldDuotone, RotationRightBoldDuotone as RotationRightBoldDuotoneIcon, RotationRightBoldDuotone as SiRotationRightBoldDuotone };
export default RotationRightBoldDuotone;
export type { RotationRightBoldDuotoneProps };
