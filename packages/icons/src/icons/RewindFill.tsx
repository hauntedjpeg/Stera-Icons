import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindFillProps = Omit<IconBaseProps, 'children'>;

const RewindFill = memo(
  forwardRef<SVGSVGElement, RewindFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.19 5.77c.56.06 1.08.35 1.42.81.26.36.33.77.36 1.08q.04.49.03 1.17v6.34q0 .68-.03 1.17c-.03.31-.1.72-.36 1.08-.34.46-.86.75-1.42.8-.45.05-.83-.1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6c-.25-.18-.55-.44-.72-.83q-.07-.16-.11-.34v3.34q0 .3-.03.54c-.03.31-.1.72-.36 1.08-.34.46-.86.75-1.42.8-.45.05-.83-.1-1.11-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6c-.25-.18-.55-.44-.72-.83-.22-.51-.22-1.09 0-1.6.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25h.17c.56.06 1.08.35 1.42.81.26.36.33.77.36 1.08q.04.49.03 1.17v2.71q.04-.18.11-.34c.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25z" />
    </IconBase>
  ))
);

RewindFill.displayName = 'RewindFill';

// Triple export pattern
export { RewindFill, RewindFill as RewindFillIcon, RewindFill as SiRewindFill };
export default RewindFill;
export type { RewindFillProps };
