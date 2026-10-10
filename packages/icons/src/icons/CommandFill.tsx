import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandFillProps = Omit<IconBaseProps, 'children'>;

const CommandFill = memo(
  forwardRef<SVGSVGElement, CommandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.33 2.75c2.17 0 3.92 1.75 3.92 3.92s-1.75 3.91-3.92 3.91h-1.41v2.84h1.41c2.17 0 3.92 1.75 3.92 3.91s-1.75 3.92-3.92 3.92-3.91-1.75-3.91-3.92v-1.41h-2.84v1.41c0 2.17-1.75 3.92-3.91 3.92s-3.92-1.75-3.92-3.92 1.75-3.91 3.92-3.91h1.41v-2.84H6.67c-2.17 0-3.92-1.75-3.92-3.91S4.5 2.75 6.67 2.75s3.91 1.75 3.91 3.92v1.41h2.84V6.67c0-2.17 1.75-3.92 3.91-3.92M6.67 15.92c-.79 0-1.42.63-1.42 1.41 0 .79.63 1.42 1.42 1.42s1.41-.63 1.41-1.42v-1.41zm9.25 1.41c0 .79.63 1.42 1.41 1.42.79 0 1.42-.63 1.42-1.42s-.63-1.41-1.42-1.41h-1.41zm-5.34-3.91h2.84v-2.84h-2.84zM6.67 5.25c-.79 0-1.42.63-1.42 1.42s.63 1.41 1.42 1.41h1.41V6.67c0-.79-.63-1.42-1.41-1.42m10.66 0c-.78 0-1.41.63-1.41 1.42v1.41h1.41c.79 0 1.42-.63 1.42-1.41 0-.79-.63-1.42-1.42-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandFill.displayName = 'CommandFill';

// Triple export pattern
export { CommandFill, CommandFill as CommandFillIcon, CommandFill as SiCommandFill };
export default CommandFill;
export type { CommandFillProps };
