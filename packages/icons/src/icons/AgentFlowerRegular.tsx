import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AgentFlowerRegularProps = Omit<IconBaseProps, 'children'>;

const AgentFlowerRegular = memo(
  forwardRef<SVGSVGElement, AgentFlowerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5M15 7.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M9.93 2.1c1.14-1.14 3-1.14 4.14 0l1.01 1.02c.27.27.64.42 1.02.42h1.43c1.62 0 2.93 1.31 2.93 2.93V7.9c0 .38.15.75.42 1.01l1.01 1.02c1.15 1.14 1.15 3 0 4.14l-1.01 1.01c-.27.27-.42.64-.42 1.02v1.43c0 1.62-1.31 2.93-2.93 2.93H16.1c-.38 0-.75.15-1.02.42l-1 1.01c-1.15 1.15-3 1.15-4.15 0l-1.01-1.01c-.27-.27-.64-.42-1.02-.42H6.47c-1.62 0-2.93-1.31-2.93-2.93V16.1c0-.38-.15-.75-.42-1.02l-1.01-1c-1.15-1.15-1.15-3 0-4.15L3.12 8.9c.27-.26.42-.63.42-1V6.46c0-1.62 1.31-2.93 2.93-2.93H7.9c.38 0 .75-.15 1.02-.42zM13 3.18c-.56-.56-1.46-.56-2.02 0L9.98 4.18c-.55.55-1.3.86-2.08.86H6.47c-.79 0-1.43.64-1.43 1.43V7.9c0 .78-.3 1.53-.86 2.08l-1.01 1c-.56.57-.56 1.47 0 2.03l1.01 1.01c.55.55.86 1.3.86 2.08v1.43c0 .79.64 1.43 1.43 1.43H7.9c.78 0 1.53.3 2.08.86l1 1.01c.57.56 1.47.56 2.03 0l1.01-1.01c.55-.55 1.3-.86 2.08-.86h1.43c.79 0 1.43-.64 1.43-1.43V16.1c0-.78.3-1.53.86-2.08l1.01-1c.56-.57.56-1.47 0-2.03l-1.01-1.01c-.55-.55-.86-1.3-.86-2.08V6.47c0-.79-.64-1.43-1.43-1.43H16.1c-.78 0-1.53-.3-2.08-.86z" clipRule="evenodd" />
    </IconBase>
  ))
);

AgentFlowerRegular.displayName = 'AgentFlowerRegular';

// Triple export pattern
export { AgentFlowerRegular, AgentFlowerRegular as AgentFlowerRegularIcon, AgentFlowerRegular as SiAgentFlowerRegular };
export default AgentFlowerRegular;
export type { AgentFlowerRegularProps };
