import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareArrowOutUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareArrowOutUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, SquareArrowOutUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75c-2.35 0-4.25 1.9-4.25 4.25v5c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h5c2.35 0 4.25-1.9 4.25-4.25 0-.41.34-.75.75-.75s.75.34.75.75c0 3.18-2.57 5.75-5.75 5.75h-5c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34V8c0-3.18 2.57-5.75 5.75-5.75" opacity={.4} />
        <path d="m21 2.25.13.01h.02l.04.02.1.03.14.07.1.09q.08.07.12.16l.04.08.05.16.01.13v8.5c0 .3-.18.58-.46.7-.28.1-.6.04-.82-.17l-3.72-3.72-4.22 4.22c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.22-4.22-3.72-3.72c-.21-.21-.28-.54-.16-.82.11-.28.39-.46.69-.46z" />
    </IconBase>
  ))
);

SquareArrowOutUpRightFillDuotone.displayName = 'SquareArrowOutUpRightFillDuotone';

// Triple export pattern
export { SquareArrowOutUpRightFillDuotone, SquareArrowOutUpRightFillDuotone as SquareArrowOutUpRightFillDuotoneIcon, SquareArrowOutUpRightFillDuotone as SiSquareArrowOutUpRightFillDuotone };
export default SquareArrowOutUpRightFillDuotone;
export type { SquareArrowOutUpRightFillDuotoneProps };
