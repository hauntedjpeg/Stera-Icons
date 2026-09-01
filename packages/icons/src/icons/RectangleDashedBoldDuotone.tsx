import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, RectangleDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.5 18.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM3 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M21 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M14.5 3.5a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2z" opacity={0.4} />
        <path d="M3 15a1 1 0 0 1 1 1c0 .5 0 .65.02.76a2 2 0 0 0 1.72 1.72c.11.02.26.02.76.02a1 1 0 0 1 0 2q-.63 0-1.02-.03a4 4 0 0 1-3.45-3.45Q2 16.63 2 16a1 1 0 0 1 1-1M21 15a1 1 0 0 1 1 1q0 .63-.03 1.02a4 4 0 0 1-3.45 3.45q-.39.04-1.02.03a1 1 0 0 1 0-2c.5 0 .65 0 .76-.02a2 2 0 0 0 1.72-1.72c.02-.11.02-.26.02-.76a1 1 0 0 1 1-1M6.5 3.5a1 1 0 0 1 0 2c-.5 0-.65 0-.76.02a2 2 0 0 0-1.72 1.72C4 7.35 4 7.5 4 8a1 1 0 0 1-2 0q0-.63.03-1.02a4 4 0 0 1 3.45-3.45q.39-.04 1.02-.03M17.5 3.5q.63 0 1.02.03a4 4 0 0 1 3.45 3.45Q22 7.37 22 8a1 1 0 1 1-2 0c0-.5 0-.65-.02-.76a2 2 0 0 0-1.72-1.72 7 7 0 0 0-.76-.02 1 1 0 0 1 0-2" />
    </IconBase>
  ))
);

RectangleDashedBoldDuotone.displayName = 'RectangleDashedBoldDuotone';

// Triple export pattern (lucide-react style)
export { RectangleDashedBoldDuotone, RectangleDashedBoldDuotone as RectangleDashedBoldDuotoneIcon, RectangleDashedBoldDuotone as SiRectangleDashedBoldDuotone };
export default RectangleDashedBoldDuotone;
export type { RectangleDashedBoldDuotoneProps };
