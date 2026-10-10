import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftRightEllipsisBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.3 6.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L3.42 12l4.3 4.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-5-5q-.28-.28-.29-.7t.3-.7zM16.3 6.3c.38-.4 1.02-.4 1.4 0l5 5q.3.28.3.7t-.3.7l-5 5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l4.29-4.3-4.3-4.3c-.39-.38-.39-1.02 0-1.4" opacity={0.4} />
        <path d="M8 10.75c.69 0 1.25.56 1.25 1.25S8.69 13.25 8 13.25 6.75 12.69 6.75 12s.56-1.25 1.25-1.25M12 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M16 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisBoldDuotone.displayName = 'ChevronsLeftRightEllipsisBoldDuotone';

// Triple export pattern
export { ChevronsLeftRightEllipsisBoldDuotone, ChevronsLeftRightEllipsisBoldDuotone as ChevronsLeftRightEllipsisBoldDuotoneIcon, ChevronsLeftRightEllipsisBoldDuotone as SiChevronsLeftRightEllipsisBoldDuotone };
export default ChevronsLeftRightEllipsisBoldDuotone;
export type { ChevronsLeftRightEllipsisBoldDuotoneProps };
