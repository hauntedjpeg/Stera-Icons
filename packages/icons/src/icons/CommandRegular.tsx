import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommandRegularProps = Omit<IconBaseProps, 'children'>;

const CommandRegular = memo(
  forwardRef<SVGSVGElement, CommandRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.33 3.25c1.9 0 3.42 1.53 3.42 3.42 0 1.88-1.53 3.41-3.42 3.41h-1.91v3.84h1.91c1.9 0 3.42 1.53 3.42 3.41s-1.53 3.42-3.42 3.42c-1.88 0-3.41-1.53-3.41-3.42v-1.91h-3.84v1.91c0 1.9-1.53 3.42-3.41 3.42s-3.42-1.53-3.42-3.42c0-1.88 1.53-3.41 3.42-3.41h1.91v-3.84H6.67c-1.89 0-3.42-1.53-3.42-3.41s1.53-3.42 3.42-3.42c1.88 0 3.41 1.53 3.41 3.42v1.91h3.84V6.67c0-1.89 1.53-3.42 3.41-3.42M6.67 15.42c-1.06 0-1.92.86-1.92 1.91 0 1.06.86 1.92 1.92 1.92s1.91-.86 1.91-1.92v-1.91zm8.75 1.91c0 1.06.86 1.92 1.91 1.92 1.06 0 1.92-.86 1.92-1.92 0-1.05-.86-1.91-1.92-1.91h-1.91zm-5.34-3.41h3.84v-3.84h-3.84zM6.67 4.75c-1.06 0-1.92.86-1.92 1.92s.86 1.91 1.92 1.91h1.91V6.67c0-1.06-.85-1.92-1.91-1.92m10.66 0c-1.05 0-1.91.86-1.91 1.92v1.91h1.91c1.06 0 1.92-.85 1.92-1.91s-.86-1.92-1.92-1.92" clipRule="evenodd" />
    </IconBase>
  ))
);

CommandRegular.displayName = 'CommandRegular';

// Triple export pattern
export { CommandRegular, CommandRegular as CommandRegularIcon, CommandRegular as SiCommandRegular };
export default CommandRegular;
export type { CommandRegularProps };
