import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentFlowerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentFlowerFillDuotone = memo(
  forwardRef<SVGSVGElement, AgentFlowerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.93 2.1c1.14-1.14 3-1.14 4.14 0l1.01 1.02c.27.27.64.42 1.02.42h1.43c1.62 0 2.93 1.31 2.93 2.93V7.9c0 .38.15.75.42 1.02l1.01 1c1.15 1.15 1.15 3 0 4.15l-1.01 1.01c-.27.27-.42.64-.42 1.02v1.43c0 1.62-1.31 2.93-2.93 2.93H16.1c-.38 0-.75.15-1.02.42l-1 1.01c-1.15 1.15-3 1.15-4.15 0l-1.01-1.01c-.27-.27-.64-.42-1.02-.42H6.47c-1.62 0-2.93-1.31-2.93-2.93V16.1c0-.38-.15-.75-.42-1.02l-1.01-1c-1.15-1.15-1.15-3 0-4.15l1.01-1.01c.27-.27.42-.64.42-1.02V6.47c0-1.62 1.31-2.93 2.93-2.93H7.9c.38 0 .75-.15 1.02-.42zM9 7.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M9 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5M15 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AgentFlowerFillDuotone.displayName = 'AgentFlowerFillDuotone';

// Triple export pattern
export { AgentFlowerFillDuotone, AgentFlowerFillDuotone as AgentFlowerFillDuotoneIcon, AgentFlowerFillDuotone as SiAgentFlowerFillDuotone };
export default AgentFlowerFillDuotone;
export type { AgentFlowerFillDuotoneProps };
