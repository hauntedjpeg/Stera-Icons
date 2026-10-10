import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilLineFillDuotone = memo(
  forwardRef<SVGSVGElement, PencilLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 19.5c.55 0 1 .45 1 1s-.45 1-1 1H2.95h.1l5-.5q.17-.02.3-.15l1.36-1.35zM2.58 21.27l.07.08.08.07q-.09-.07-.15-.15M2.5 21.04v-.08z" opacity={0.4} />
        <path d="m18.32 10.88-9.97 9.97q-.13.13-.3.15l-5 .5q-.24.02-.4-.15t-.15-.4l.5-5 .02-.08q.03-.13.13-.22l9.96-9.97zM16.76 2.03c.69-.68 1.8-.68 2.48 0l2.73 2.73c.68.69.68 1.8 0 2.48l-2.59 2.58-5.2-5.2z" />
    </IconBase>
  ))
);

PencilLineFillDuotone.displayName = 'PencilLineFillDuotone';

// Triple export pattern
export { PencilLineFillDuotone, PencilLineFillDuotone as PencilLineFillDuotoneIcon, PencilLineFillDuotone as SiPencilLineFillDuotone };
export default PencilLineFillDuotone;
export type { PencilLineFillDuotoneProps };
