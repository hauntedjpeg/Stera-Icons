import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlashFillDuotone = memo(
  forwardRef<SVGSVGElement, SlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.93 12.83-8 9a1.25 1.25 0 0 1-1.86-1.66l8-9z" opacity={.4} />
        <path d="M19.07 2.17a1.25 1.25 0 0 1 1.86 1.66l-8 9-1.86-1.66z" />
    </IconBase>
  ))
);

SlashFillDuotone.displayName = 'SlashFillDuotone';

// Triple export pattern (lucide-react style)
export { SlashFillDuotone, SlashFillDuotone as SlashFillDuotoneIcon, SlashFillDuotone as SiSlashFillDuotone };
export default SlashFillDuotone;
export type { SlashFillDuotoneProps };
