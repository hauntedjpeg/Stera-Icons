import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RewindBoldDuotone = memo(
  forwardRef<SVGSVGElement, RewindBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.18 5.77c.57.06 1.1.35 1.43.81.26.36.33.77.36 1.08q.04.49.03 1.17v6.97q0 .3-.03.54c-.03.31-.1.72-.36 1.08-.34.46-.86.75-1.43.8-.44.05-.82-.1-1.1-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6c-.25-.18-.55-.44-.72-.83-.22-.51-.22-1.09 0-1.6.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25zm-.24 2.05q-.25.13-.85.5L3.8 11.48c-.4.23-.63.37-.79.49L3 12l.02.02q.22.16.79.5l5.29 3.17q.6.37.85.49h.03v-.02q.02-.15.03-.4V8.84c0-.49 0-.78-.02-.99v-.03z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M21.18 5.77c.57.06 1.1.35 1.43.81.26.36.33.77.36 1.08q.04.49.03 1.17v6.34q0 .68-.03 1.17c-.03.31-.1.72-.36 1.08-.34.46-.86.75-1.43.8-.44.05-.82-.1-1.1-.24q-.45-.22-1.02-.58l-5.29-3.17q-.55-.32-.94-.6c-.25-.18-.55-.44-.72-.83-.22-.51-.22-1.09 0-1.6.17-.4.47-.65.72-.83q.39-.28.94-.6l5.3-3.17q.57-.36 1-.58c.25-.12.58-.25.95-.25zm-.24 2.05q-.25.13-.85.5l-5.29 3.17c-.4.23-.63.37-.79.49L14 12l.02.02q.22.16.79.5l5.29 3.17q.6.37.85.49h.03v-.02c.03-.21.03-.5.03-.99V8.83c0-.49 0-.78-.02-.99v-.03z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RewindBoldDuotone.displayName = 'RewindBoldDuotone';

// Triple export pattern
export { RewindBoldDuotone, RewindBoldDuotone as RewindBoldDuotoneIcon, RewindBoldDuotone as SiRewindBoldDuotone };
export default RewindBoldDuotone;
export type { RewindBoldDuotoneProps };
