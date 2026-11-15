import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentFlowerFillProps = Omit<IconBaseProps, 'children'>;

const AgentFlowerFill = memo(
  forwardRef<SVGSVGElement, AgentFlowerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.93 2.1c1.14-1.14 3-1.14 4.14 0l1.02 1.02c.26.27.63.42 1 .42h1.44c1.62 0 2.93 1.31 2.93 2.93V7.9c0 .38.15.75.42 1.01l1.01 1.02c1.15 1.14 1.15 3 0 4.14l-1.01 1.01c-.27.27-.42.64-.42 1.02v1.43c0 1.62-1.31 2.93-2.93 2.93H16.1c-.38 0-.75.15-1.01.42l-1.02 1.01c-1.14 1.15-3 1.15-4.14 0l-1.01-1.01c-.27-.27-.64-.42-1.02-.42H6.47c-1.62 0-2.93-1.31-2.93-2.93V16.1c0-.38-.15-.75-.42-1.02l-1.01-1c-1.15-1.15-1.15-3 0-4.15L3.12 8.9c.27-.26.42-.63.42-1V6.46c0-1.62 1.31-2.93 2.93-2.93H7.9c.38 0 .75-.15 1.02-.42zM9 7.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5m6 0c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentFlowerFill.displayName = 'AgentFlowerFill';

// Triple export pattern
export { AgentFlowerFill, AgentFlowerFill as AgentFlowerFillIcon, AgentFlowerFill as SiAgentFlowerFill };
export default AgentFlowerFill;
export type { AgentFlowerFillProps };
