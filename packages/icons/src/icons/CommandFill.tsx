import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandFillProps = Omit<IconBaseProps, 'children'>;

const CommandFill = memo(
  forwardRef<SVGSVGElement, CommandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.33 2.75a3.92 3.92 0 0 1 0 7.83h-1.41v2.84h1.41a3.92 3.92 0 1 1-3.91 3.91v-1.41h-2.84v1.41a3.92 3.92 0 1 1-3.91-3.91h1.41v-2.84H6.67a3.92 3.92 0 1 1 3.91-3.91v1.41h2.84V6.67a3.9 3.9 0 0 1 3.91-3.92M6.67 15.92a1.42 1.42 0 1 0 1.41 1.41v-1.41zm9.25 1.41a1.42 1.42 0 1 0 1.41-1.41h-1.41zm-5.34-3.91h2.84v-2.84h-2.84zM6.67 5.25a1.42 1.42 0 0 0 0 2.83h1.41V6.67c0-.79-.63-1.42-1.41-1.42m10.66 0c-.78 0-1.41.63-1.41 1.42v1.41h1.41a1.42 1.42 0 0 0 0-2.83" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFill.displayName = 'CommandFill';

// Triple export pattern (lucide-react style)
export { CommandFill, CommandFill as CommandFillIcon, CommandFill as SiCommandFill };
export default CommandFill;
export type { CommandFillProps };
