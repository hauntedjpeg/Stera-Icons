import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilTipFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilTipFillDuotone = memo(
  forwardRef<SVGSVGElement, PencilTipFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.71 13.34c.81.4 1.77.4 2.58 0l1.84-.93v10.47H6.25a2.13 2.13 0 0 1-2.12-2.13v-8.71zM19.88 20.75c0 1.17-.96 2.13-2.13 2.13h-4.87V12.42l1.83.92c.81.4 1.77.4 2.58 0l2.59-1.3zM19.06 9.65q.23.3.4.64l-2.96 1.48c-.31.16-.69.16-1 0l-2.21-1.1c-.81-.41-1.77-.41-2.58 0l-2.2 1.1c-.32.16-.7.16-1.01 0l-2.96-1.48q.17-.33.4-.64l3.3-4.23q.06.15.2.25l.44.37a4.9 4.9 0 0 0 6.24 0l.44-.37a1 1 0 0 0 .2-.25z" opacity={0.4} />
        <path d="M19.46 10.3q.4.8.41 1.73v.01l-2.58 1.3c-.81.4-1.77.4-2.58 0l-1.84-.93v10.47h-1.74V12.42l-1.84.92c-.81.4-1.77.4-2.58 0l-2.58-1.3v-.01q0-.91.4-1.74l2.97 1.48c.31.16.69.16 1 0l2.21-1.1c.81-.41 1.77-.41 2.58 0l2.2 1.1c.32.16.7.16 1.01 0zM12 1.13q.42 0 .69.33l3.08 3.96a1 1 0 0 1-.21.25l-.44.37a4.9 4.9 0 0 1-6.24 0l-.44-.37a1 1 0 0 1-.2-.25l3.07-3.96.07-.07a1 1 0 0 1 .62-.26" />
    </IconBase>
  ))
);

PencilTipFillDuotone.displayName = 'PencilTipFillDuotone';

// Triple export pattern (lucide-react style)
export { PencilTipFillDuotone, PencilTipFillDuotone as PencilTipFillDuotoneIcon, PencilTipFillDuotone as SiPencilTipFillDuotone };
export default PencilTipFillDuotone;
export type { PencilTipFillDuotoneProps };
