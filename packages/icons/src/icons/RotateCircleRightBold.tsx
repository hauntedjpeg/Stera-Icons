import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightBold = memo(
  forwardRef<SVGSVGElement, RotateCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 6.3c.38-.4 1.02-.4 1.4 0l2.44 2.42c.43.43.43 1.13 0 1.56L14.2 12.7c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l.8-.79h-1.84C10.23 10.5 9 11.73 9 13.25S10.23 16 11.75 16c.93 0 1.75-.46 2.25-1.16.32-.45.94-.56 1.4-.24.44.32.55.94.23 1.4-.86 1.2-2.28 2-3.88 2C9.13 18 7 15.87 7 13.25S9.13 8.5 11.75 8.5h1.84l-.8-.8c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightBold.displayName = 'RotateCircleRightBold';

// Triple export pattern
export { RotateCircleRightBold, RotateCircleRightBold as RotateCircleRightBoldIcon, RotateCircleRightBold as SiRotateCircleRightBold };
export default RotateCircleRightBold;
export type { RotateCircleRightBoldProps };
