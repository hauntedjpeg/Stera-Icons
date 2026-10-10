import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RewindFillDuotone = memo(
  forwardRef<SVGSVGElement, RewindFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.18 5.77c.57.06 1.1.35 1.43.81.26.36.33.77.36 1.08q.04.49.03 1.17v6.97q0 .3-.03.54c-.03.31-.1.72-.36 1.08-.34.46-.86.75-1.43.8-.44.05-.82-.1-1.1-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6c-.25-.18-.55-.44-.72-.83-.22-.51-.22-1.09 0-1.6.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25z" />
        <path d="M21.18 5.77c.57.06 1.1.35 1.43.81.26.36.33.77.36 1.08q.04.49.03 1.17v6.34q0 .68-.03 1.17c-.03.31-.1.72-.36 1.08-.34.46-.86.75-1.43.8-.44.05-.82-.1-1.1-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6c-.25-.18-.55-.44-.72-.83-.22-.51-.22-1.09 0-1.6.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25z" opacity={.4} />
    </IconBase>
  ))
);

RewindFillDuotone.displayName = 'RewindFillDuotone';

// Triple export pattern
export { RewindFillDuotone, RewindFillDuotone as RewindFillDuotoneIcon, RewindFillDuotone as SiRewindFillDuotone };
export default RewindFillDuotone;
export type { RewindFillDuotoneProps };
