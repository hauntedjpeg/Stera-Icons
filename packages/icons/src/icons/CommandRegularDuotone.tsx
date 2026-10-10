import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommandRegularDuotone = memo(
  forwardRef<SVGSVGElement, CommandRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.42 13.92h1.91c1.9 0 3.42 1.53 3.42 3.41s-1.53 3.42-3.42 3.42c-1.88 0-3.41-1.53-3.41-3.42V10h1.5zm0 3.41c0 1.06.86 1.92 1.91 1.92 1.06 0 1.92-.86 1.92-1.92s-.86-1.91-1.92-1.91h-1.91zM6.67 3.25c1.88 0 3.41 1.53 3.41 3.42V14h-1.5v-3.92H6.67c-1.89 0-3.42-1.53-3.42-3.41s1.53-3.42 3.42-3.42m0 1.5c-1.06 0-1.92.86-1.92 1.92s.86 1.91 1.92 1.91h1.91V6.67c0-1.06-.85-1.92-1.91-1.92" opacity={0.4} />
        <path fillRule="evenodd" d="M14 15.42h-3.92v1.91c0 1.89-1.53 3.42-3.41 3.42s-3.42-1.53-3.42-3.42c0-1.88 1.53-3.41 3.42-3.41H14zm-7.33 0c-1.06 0-1.92.85-1.92 1.91s.86 1.92 1.92 1.92 1.91-.86 1.91-1.92v-1.91zM17.33 3.25c1.89 0 3.42 1.53 3.42 3.42 0 1.88-1.53 3.41-3.42 3.41H10v-1.5h3.92V6.67c0-1.89 1.53-3.42 3.41-3.42m0 1.5c-1.06 0-1.91.86-1.91 1.92v1.91h1.91c1.06 0 1.92-.85 1.92-1.91s-.86-1.92-1.92-1.92" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandRegularDuotone.displayName = 'CommandRegularDuotone';

// Triple export pattern
export { CommandRegularDuotone, CommandRegularDuotone as CommandRegularDuotoneIcon, CommandRegularDuotone as SiCommandRegularDuotone };
export default CommandRegularDuotone;
export type { CommandRegularDuotoneProps };
