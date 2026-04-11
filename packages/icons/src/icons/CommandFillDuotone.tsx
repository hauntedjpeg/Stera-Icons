import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandFillDuotone = memo(
  forwardRef<SVGSVGElement, CommandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.92 13.42h1.41a3.92 3.92 0 1 1-3.91 3.91v-6.75h2.5zm0 3.91a1.42 1.42 0 1 0 1.41-1.41h-1.41zM6.67 2.75a3.9 3.9 0 0 1 3.91 3.92v6.75h-2.5v-2.84H6.67a3.92 3.92 0 1 1 0-7.83m0 2.5a1.42 1.42 0 0 0 0 2.83h1.41V6.67c0-.79-.63-1.42-1.41-1.42" opacity={0.4} />
        <path fillRule="evenodd" d="M13.42 15.92h-2.84v1.41a3.92 3.92 0 1 1-3.91-3.91h6.75zm-6.75 0a1.42 1.42 0 1 0 1.41 1.41v-1.41zM17.33 2.75a3.92 3.92 0 0 1 0 7.83h-6.75v-2.5h2.84V6.67a3.9 3.9 0 0 1 3.91-3.92m0 2.5c-.78 0-1.41.63-1.41 1.42v1.41h1.41a1.42 1.42 0 1 0 0-2.83" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFillDuotone.displayName = 'CommandFillDuotone';

// Triple export pattern (lucide-react style)
export { CommandFillDuotone, CommandFillDuotone as CommandFillDuotoneIcon, CommandFillDuotone as SiCommandFillDuotone };
export default CommandFillDuotone;
export type { CommandFillDuotoneProps };
