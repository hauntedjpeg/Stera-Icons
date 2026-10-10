import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicFillDuotone = memo(
  forwardRef<SVGSVGElement, MicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c2.7 0 4.88 2.18 4.88 4.87v3c0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88V7c0-2.7 2.18-4.87 4.87-4.87" />
        <path d="M4.03 11.15c.47-.12.95.16 1.07.63.79 3.08 3.58 5.34 6.9 5.34s6.1-2.26 6.9-5.34c.12-.47.6-.75 1.07-.63.46.12.75.6.63 1.07-.92 3.55-3.98 6.24-7.73 6.61v1.3H15c.48 0 .87.39.87.87s-.39.87-.87.87H9c-.48 0-.88-.39-.88-.87s.4-.87.88-.88h2.12v-1.29c-3.74-.37-6.8-3.06-7.72-6.61-.12-.47.17-.95.63-1.07" opacity={.4} />
    </IconBase>
  ))
);

MicFillDuotone.displayName = 'MicFillDuotone';

// Triple export pattern
export { MicFillDuotone, MicFillDuotone as MicFillDuotoneIcon, MicFillDuotone as SiMicFillDuotone };
export default MicFillDuotone;
export type { MicFillDuotoneProps };
