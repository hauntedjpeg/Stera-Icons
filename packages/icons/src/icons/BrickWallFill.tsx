import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrickWallFillProps = Omit<IconBaseProps, 'children'>;

const BrickWallFill = memo(
  forwardRef<SVGSVGElement, BrickWallFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-fill" {...props}>
      <path d="M7.54 19.88H6.2q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38h5.42zM14.7 19.88H9.3v-4.09h5.4zM21.88 15.8q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04h-1.34v-4.09zM11.13 14.04h-9V9.96h9zM21.88 14.04h-9V9.96h9zM7.54 8.2H2.13q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04h1.34zM14.7 8.2H9.3V4.14h5.4zM17.8 4.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38h-5.42V4.14z" />
    </IconBase>
  ))
);

BrickWallFill.displayName = 'BrickWallFill';

// Triple export pattern (lucide-react style)
export { BrickWallFill, BrickWallFill as BrickWallFillIcon, BrickWallFill as SiBrickWallFill };
export default BrickWallFill;
export type { BrickWallFillProps };
