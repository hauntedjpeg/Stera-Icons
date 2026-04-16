import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleFillDuotone = memo(
  forwardRef<SVGSVGElement, TriangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.34 4.5c.42-.18.9-.18 1.32 0 .15.07.37.24.72.74.34.49.75 1.18 1.32 2.18l4.07 7.02c.57 1 .98 1.7 1.23 2.24.26.55.3.83.28.99-.05.46-.29.87-.66 1.14-.14.1-.39.2-1 .26-.6.05-1.4.06-2.56.06H7.94c-1.16 0-1.96 0-2.57-.06s-.86-.16-.99-.26a1.6 1.6 0 0 1-.66-1.14c-.02-.16.02-.44.28-.99.25-.55.65-1.25 1.23-2.24L9.3 7.42c.57-1 .97-1.7 1.32-2.18.35-.5.57-.67.72-.73" opacity={.4} />
        <path fillRule="evenodd" d="M10.63 2.9a3.4 3.4 0 0 1 2.74 0c.6.27 1.03.76 1.43 1.32q.6.87 1.42 2.32l4.06 7.02q.86 1.44 1.31 2.39c.3.63.5 1.26.43 1.9-.1.95-.6 1.82-1.37 2.38-.53.38-1.17.52-1.86.58q-1.04.09-2.73.07H7.94q-1.67.02-2.73-.07c-.7-.06-1.33-.2-1.86-.58a3.4 3.4 0 0 1-1.37-2.38c-.07-.64.14-1.27.43-1.9q.46-.95 1.3-2.4l4.07-7Q8.6 5.08 9.2 4.21c.4-.56.84-1.05 1.43-1.31m2.03 1.6c-.42-.18-.9-.18-1.32 0-.15.07-.37.24-.72.74-.35.49-.75 1.18-1.32 2.18l-4.07 7.01c-.58 1-.98 1.7-1.23 2.25-.26.55-.3.82-.28.99.05.46.29.87.66 1.14.13.1.39.2 1 .26.6.05 1.4.06 2.56.06h8.12c1.16 0 1.96 0 2.56-.06s.87-.16 1-.26c.37-.27.61-.68.66-1.14.02-.17-.02-.44-.28-.99a32 32 0 0 0-1.23-2.25L14.7 7.42c-.57-1-.98-1.7-1.32-2.18-.35-.5-.57-.67-.72-.74" clipRule="evenodd" />
    </IconBase>
  ))
);

TriangleFillDuotone.displayName = 'TriangleFillDuotone';

// Triple export pattern (lucide-react style)
export { TriangleFillDuotone, TriangleFillDuotone as TriangleFillDuotoneIcon, TriangleFillDuotone as SiTriangleFillDuotone };
export default TriangleFillDuotone;
export type { TriangleFillDuotoneProps };
