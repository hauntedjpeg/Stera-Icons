import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleLabelFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleLabelFillDuotone = memo(
  forwardRef<SVGSVGElement, BottleLabelFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-label-fill-duotone" {...props}>
      <path d="M16.13 19.75c0 1.17-.96 2.13-2.13 2.13h-4a2.13 2.13 0 0 1-2.12-2.13v-1.87h8.25zM16.13 16.13H7.88v-2.25h8.25zM13.72 4.06l.35 3.76q.03.34.24.6l1.19 1.49c.4.5.62 1.14.63 1.8v.41H7.88v-.42c0-.65.22-1.28.62-1.8l1.2-1.48q.2-.26.23-.6l.35-3.76.02-.18h3.4z" opacity={0.4} />
        <path d="M16.13 17.88H7.88v-1.75h8.25zM16.13 13.88H7.88v-1.76h8.25zM13.75 2.13a.88.88 0 0 1 0 1.75h-3.5a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

BottleLabelFillDuotone.displayName = 'BottleLabelFillDuotone';

// Triple export pattern (lucide-react style)
export { BottleLabelFillDuotone, BottleLabelFillDuotone as BottleLabelFillDuotoneIcon, BottleLabelFillDuotone as SiBottleLabelFillDuotone };
export default BottleLabelFillDuotone;
export type { BottleLabelFillDuotoneProps };
