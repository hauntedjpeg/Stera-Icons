import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilFillProps = Omit<IconBaseProps, 'children'>;

const PencilFill = memo(
  forwardRef<SVGSVGElement, PencilFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.32 10.88-9.97 9.97q-.13.13-.3.15l-5 .5q-.24.02-.4-.15t-.15-.4l.5-5 .02-.08q.04-.13.13-.22l9.97-9.97zM16.76 2.03c.69-.68 1.8-.68 2.48 0l2.73 2.73c.68.69.68 1.8 0 2.48l-2.59 2.58-5.2-5.2z" />
    </IconBase>
  ))
);

PencilFill.displayName = 'PencilFill';

// Triple export pattern
export { PencilFill, PencilFill as PencilFillIcon, PencilFill as SiPencilFill };
export default PencilFill;
export type { PencilFillProps };
