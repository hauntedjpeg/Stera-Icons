import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicFillDuotone = memo(
  forwardRef<SVGSVGElement, MicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-fill-duotone" {...props}>
      <path d="M12 2.13c2.7 0 4.88 2.18 4.88 4.87v3a4.87 4.87 0 1 1-9.75 0V7c0-2.7 2.18-4.87 4.87-4.87" />
        <path d="M4.03 11.15a.9.9 0 0 1 1.07.63 7.13 7.13 0 0 0 13.8 0 .88.88 0 0 1 1.7.44 8.9 8.9 0 0 1-7.73 6.61v1.3H15a.88.88 0 0 1 0 1.74H9a.88.88 0 0 1 0-1.75h2.12v-1.29a8.9 8.9 0 0 1-7.72-6.61.9.9 0 0 1 .63-1.07" opacity={.4} />
    </IconBase>
  ))
);

MicFillDuotone.displayName = 'MicFillDuotone';

// Triple export pattern (lucide-react style)
export { MicFillDuotone, MicFillDuotone as MicFillDuotoneIcon, MicFillDuotone as SiMicFillDuotone };
export default MicFillDuotone;
export type { MicFillDuotoneProps };
