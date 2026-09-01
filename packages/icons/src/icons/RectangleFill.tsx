import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleFillProps = Omit<IconBaseProps, 'children'>;

const RectangleFill = memo(
  forwardRef<SVGSVGElement, RectangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 3.63q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v5.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.3q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
    </IconBase>
  ))
);

RectangleFill.displayName = 'RectangleFill';

// Triple export pattern (lucide-react style)
export { RectangleFill, RectangleFill as RectangleFillIcon, RectangleFill as SiRectangleFill };
export default RectangleFill;
export type { RectangleFillProps };
