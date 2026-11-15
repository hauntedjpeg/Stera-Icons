import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentTriangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AgentTriangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, AgentTriangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.68 3.02c.84-.37 1.8-.37 2.64 0 .56.25.98.71 1.38 1.28q.59.84 1.41 2.3l4.06 7.02q.86 1.45 1.3 2.38c.3.63.49 1.23.43 1.84-.1.91-.58 1.75-1.33 2.29-.5.36-1.1.5-1.8.56q-1.04.07-2.7.06H7.93q-1.68.02-2.71-.06c-.7-.07-1.31-.2-1.8-.56-.75-.54-1.23-1.38-1.33-2.3-.06-.6.13-1.2.42-1.83q.45-.93 1.3-2.38L7.9 6.6c.56-.97 1-1.74 1.4-2.3.4-.57.83-1.03 1.39-1.28m2.03 1.37c-.45-.2-.97-.2-1.42 0-.18.08-.41.27-.77.77-.35.5-.76 1.2-1.33 2.2l-4.07 7.01c-.57 1-.98 1.7-1.24 2.26-.25.56-.3.85-.28 1.05.05.5.3.94.7 1.23.17.12.45.23 1.06.28s1.42.06 2.58.06h8.12c1.15 0 1.97 0 2.58-.06.6-.05.9-.16 1.05-.28.4-.29.66-.74.71-1.23.02-.2-.03-.5-.28-1.05-.26-.56-.67-1.26-1.25-2.26l-4.06-7.01c-.57-1-.98-1.7-1.33-2.2s-.59-.69-.77-.77" clipRule="evenodd" opacity={.4} />
        <path d="M9.75 10c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25M14.25 10c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25S13 14.44 13 13.75v-2.5c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

AgentTriangleRegularDuotone.displayName = 'AgentTriangleRegularDuotone';

// Triple export pattern
export { AgentTriangleRegularDuotone, AgentTriangleRegularDuotone as AgentTriangleRegularDuotoneIcon, AgentTriangleRegularDuotone as SiAgentTriangleRegularDuotone };
export default AgentTriangleRegularDuotone;
export type { AgentTriangleRegularDuotoneProps };
