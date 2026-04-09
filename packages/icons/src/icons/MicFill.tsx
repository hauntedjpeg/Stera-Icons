import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicFillProps = Omit<IconBaseProps, 'children'>;

const MicFill = memo(
  forwardRef<SVGSVGElement, MicFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-fill" {...props}>
      <path d="M4.03 11.15a.9.9 0 0 1 1.07.63 7.13 7.13 0 0 0 13.8 0 .88.88 0 0 1 1.7.44 8.9 8.9 0 0 1-7.73 6.61v1.3H15a.87.87 0 1 1 0 1.75H9a.88.88 0 0 1 0-1.75h2.12v-1.3a8.9 8.9 0 0 1-7.72-6.61.9.9 0 0 1 .63-1.07" />
        <path d="M12 2.13c2.7 0 4.87 2.18 4.87 4.87v3a4.87 4.87 0 1 1-9.75 0V7c0-2.7 2.19-4.87 4.88-4.87" />
    </IconBase>
  ))
);

MicFill.displayName = 'MicFill';

// Triple export pattern (lucide-react style)
export { MicFill, MicFill as MicFillIcon, MicFill as SiMicFill };
export default MicFill;
export type { MicFillProps };
