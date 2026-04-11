import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ServerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ServerFillDuotone = memo(
  forwardRef<SVGSVGElement, ServerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 12.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38v-.6q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM7 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M17.3 2.63q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H6.7q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.55-.04-1.38v-.6q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04zM7 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" opacity={0.4} />
        <path d="M7 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7 5.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

ServerFillDuotone.displayName = 'ServerFillDuotone';

// Triple export pattern (lucide-react style)
export { ServerFillDuotone, ServerFillDuotone as ServerFillDuotoneIcon, ServerFillDuotone as SiServerFillDuotone };
export default ServerFillDuotone;
export type { ServerFillDuotoneProps };
