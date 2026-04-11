import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleFillDuotone = memo(
  forwardRef<SVGSVGElement, RectangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.4 5.38c1 0 1.69 0 2.23.04.53.04.83.12 1.06.24q.76.39 1.15 1.15c.12.23.2.53.24 1.06.04.54.05 1.24.05 2.23v3.8c0 1 0 1.69-.05 2.23a3 3 0 0 1-.24 1.06q-.39.76-1.15 1.15c-.23.12-.53.2-1.06.24-.54.04-1.24.05-2.23.05H8.6c-1 0-1.69 0-2.23-.05a3 3 0 0 1-1.06-.24q-.76-.39-1.15-1.15a3 3 0 0 1-.24-1.06c-.04-.54-.04-1.24-.04-2.23v-3.8c0-1 0-1.69.04-2.23.04-.53.12-.83.24-1.06q.39-.76 1.15-1.15c.23-.12.53-.2 1.06-.24.54-.04 1.24-.04 2.23-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M15.4 3.63q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v3.8q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.52.27-1.08.38-1.72.43q-.93.07-2.37.05H8.6q-1.44.01-2.37-.05a5 5 0 0 1-1.72-.42 4.4 4.4 0 0 1-1.9-1.91 5 5 0 0 1-.43-1.72q-.08-.93-.06-2.37v-3.8q-.02-1.44.06-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43q.93-.08 2.37-.06zM8.6 5.38c-1 0-1.69 0-2.23.04a3 3 0 0 0-1.06.24q-.76.39-1.15 1.15c-.12.23-.2.53-.24 1.06-.04.54-.04 1.24-.04 2.23v3.8c0 1 0 1.69.04 2.23.04.53.12.83.24 1.06q.39.76 1.15 1.15c.23.12.53.2 1.06.24.54.04 1.24.05 2.23.05h6.8c1 0 1.69 0 2.23-.05a3 3 0 0 0 1.06-.24q.76-.39 1.15-1.15c.12-.23.2-.53.24-1.06.04-.54.05-1.24.05-2.23v-3.8c0-1 0-1.69-.05-2.23a3 3 0 0 0-.24-1.06q-.39-.76-1.15-1.15a3 3 0 0 0-1.06-.24c-.54-.04-1.24-.04-2.23-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

RectangleFillDuotone.displayName = 'RectangleFillDuotone';

// Triple export pattern (lucide-react style)
export { RectangleFillDuotone, RectangleFillDuotone as RectangleFillDuotoneIcon, RectangleFillDuotone as SiRectangleFillDuotone };
export default RectangleFillDuotone;
export type { RectangleFillDuotoneProps };
