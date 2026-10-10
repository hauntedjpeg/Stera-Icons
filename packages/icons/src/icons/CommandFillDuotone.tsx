import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandFillDuotone = memo(
  forwardRef<SVGSVGElement, CommandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.92 13.42h1.41c2.17 0 3.92 1.75 3.92 3.91s-1.75 3.92-3.92 3.92-3.91-1.75-3.91-3.92v-6.75h2.5zm0 3.91c0 .79.63 1.42 1.41 1.42.79 0 1.42-.63 1.42-1.42s-.63-1.41-1.42-1.41h-1.41zM6.67 2.75c2.16 0 3.91 1.75 3.91 3.92v6.75h-2.5v-2.84H6.67c-2.17 0-3.92-1.75-3.92-3.91S4.5 2.75 6.67 2.75m0 2.5c-.79 0-1.42.63-1.42 1.42s.63 1.41 1.42 1.41h1.41V6.67c0-.79-.63-1.42-1.41-1.42" opacity={0.4} />
        <path fillRule="evenodd" d="M13.42 15.92h-2.84v1.41c0 2.17-1.75 3.92-3.91 3.92s-3.92-1.75-3.92-3.92 1.75-3.91 3.92-3.91h6.75zm-6.75 0c-.79 0-1.42.63-1.42 1.41 0 .79.63 1.42 1.42 1.42s1.41-.63 1.41-1.42v-1.41zM17.33 2.75c2.17 0 3.92 1.75 3.92 3.92s-1.75 3.91-3.92 3.91h-6.75v-2.5h2.84V6.67c0-2.17 1.75-3.92 3.91-3.92m0 2.5c-.78 0-1.41.63-1.41 1.42v1.41h1.41c.79 0 1.42-.63 1.42-1.41 0-.79-.63-1.42-1.42-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFillDuotone.displayName = 'CommandFillDuotone';

// Triple export pattern
export { CommandFillDuotone, CommandFillDuotone as CommandFillDuotoneIcon, CommandFillDuotone as SiCommandFillDuotone };
export default CommandFillDuotone;
export type { CommandFillDuotoneProps };
