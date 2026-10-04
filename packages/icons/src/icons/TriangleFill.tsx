import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleFillProps = Omit<IconBaseProps, 'children'>;

const TriangleFill = memo(
  forwardRef<SVGSVGElement, TriangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.63 2.9a3.4 3.4 0 0 1 2.74 0c.6.27 1.03.76 1.43 1.32q.6.87 1.42 2.32l4.06 7.02q.86 1.44 1.31 2.39c.3.63.5 1.26.43 1.9-.1.95-.6 1.82-1.37 2.38-.53.38-1.17.52-1.87.58q-1.05.09-2.72.07H7.94q-1.67.02-2.73-.07c-.7-.06-1.33-.2-1.86-.58a3.4 3.4 0 0 1-1.37-2.38c-.07-.64.14-1.27.43-1.9q.46-.95 1.3-2.4l4.07-7c.56-.98 1-1.75 1.41-2.33.4-.56.85-1.05 1.44-1.31" />
    </IconBase>
  ))
);

TriangleFill.displayName = 'TriangleFill';

// Triple export pattern (lucide-react style)
export { TriangleFill, TriangleFill as TriangleFillIcon, TriangleFill as SiTriangleFill };
export default TriangleFill;
export type { TriangleFillProps };
