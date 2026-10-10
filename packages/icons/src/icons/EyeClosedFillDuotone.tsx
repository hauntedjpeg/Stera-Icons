import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 14.71q1.16.44 2.43.62l-.59 2.02c-.19.66-.88 1.04-1.54.85-.67-.2-1.05-.88-.86-1.55zM16.68 16.65c.19.67-.2 1.36-.86 1.55-.66.2-1.35-.19-1.54-.85l-.59-2.02q1.27-.18 2.43-.62zM3.19 11.44q.8.96 1.82 1.72L3.35 14.7c-.5.46-1.3.43-1.77-.07s-.44-1.3.07-1.77zM22.35 12.86c.5.47.54 1.26.07 1.77-.47.5-1.26.53-1.77.07l-1.66-1.54q1.02-.75 1.82-1.72z" opacity={0.4} />
        <path d="M19.85 8.42c.32-.61 1.08-.85 1.69-.53s.84 1.08.52 1.69c-1.83 3.5-5.67 5.87-10.06 5.87-4.38 0-8.23-2.37-10.06-5.87-.32-.61-.09-1.37.52-1.69s1.37-.08 1.7.53c1.38 2.65 4.35 4.53 7.84 4.53s6.46-1.88 7.85-4.53" />
    </IconBase>
  ))
);

EyeClosedFillDuotone.displayName = 'EyeClosedFillDuotone';

// Triple export pattern
export { EyeClosedFillDuotone, EyeClosedFillDuotone as EyeClosedFillDuotoneIcon, EyeClosedFillDuotone as SiEyeClosedFillDuotone };
export default EyeClosedFillDuotone;
export type { EyeClosedFillDuotoneProps };
