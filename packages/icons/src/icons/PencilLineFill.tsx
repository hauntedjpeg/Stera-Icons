import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineFillProps = Omit<IconBaseProps, 'children'>;

const PencilLineFill = memo(
  forwardRef<SVGSVGElement, PencilLineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.32 10.88 9.71 19.5H21c.55 0 1 .45 1 1s-.45 1-1 1H2.92l-.07-.03h-.02l-.08-.04-.02-.01q-.19-.12-.22-.35v-.02L2.5 21v-.05l.5-5 .02-.08q.04-.13.13-.22l9.97-9.97zM16.76 2.03c.69-.68 1.8-.68 2.48 0l2.73 2.73c.68.69.68 1.8 0 2.48l-2.59 2.58-5.2-5.2z" />
    </IconBase>
  ))
);

PencilLineFill.displayName = 'PencilLineFill';

// Triple export pattern
export { PencilLineFill, PencilLineFill as PencilLineFillIcon, PencilLineFill as SiPencilLineFill };
export default PencilLineFill;
export type { PencilLineFillProps };
