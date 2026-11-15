import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentTriangleFillProps = Omit<IconBaseProps, 'children'>;

const AgentTriangleFill = memo(
  forwardRef<SVGSVGElement, AgentTriangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.68 3.02c.84-.37 1.8-.37 2.64 0 .56.25.98.71 1.38 1.28q.59.85 1.41 2.3l4.06 7.02q.86 1.45 1.3 2.38c.3.63.49 1.23.43 1.84-.1.91-.58 1.75-1.33 2.29-.5.36-1.1.5-1.8.56q-1.04.07-2.7.06H7.93q-1.69.02-2.71-.06c-.7-.07-1.31-.2-1.8-.56-.75-.54-1.23-1.38-1.33-2.3-.06-.6.13-1.2.42-1.83q.46-.93 1.3-2.38L7.9 6.6c.56-.96 1-1.74 1.4-2.3.4-.57.83-1.03 1.39-1.28M9.75 10c-.7 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25S11 14.44 11 13.75v-2.5c0-.69-.56-1.25-1.25-1.25m4.5 0c-.7 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentTriangleFill.displayName = 'AgentTriangleFill';

// Triple export pattern
export { AgentTriangleFill, AgentTriangleFill as AgentTriangleFillIcon, AgentTriangleFill as SiAgentTriangleFill };
export default AgentTriangleFill;
export type { AgentTriangleFillProps };
