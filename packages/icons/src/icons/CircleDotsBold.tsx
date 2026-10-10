import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotsBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDotsBold = memo(
  forwardRef<SVGSVGElement, CircleDotsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19c1.1 0 2 .9 2 2s-.89 2-2 2-2-.9-2-2 .9-2 2-2M4.22 16.95c.78-.79 2.05-.78 2.83 0s.79 2.05 0 2.83c-.78.78-2.04.78-2.82 0h-.01c-.78-.79-.78-2.05 0-2.83M16.95 16.95c.78-.78 2.05-.79 2.83 0 .78.78.78 2.04 0 2.82v.01c-.79.78-2.05.78-2.83 0s-.78-2.05 0-2.83M3 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2M21 10c1.1 0 2 .89 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M4.23 4.22c.78-.78 2.04-.78 2.82 0 .79.78.78 2.05 0 2.83s-2.05.79-2.83 0c-.78-.78-.78-2.04 0-2.82zM16.95 4.22c.78-.78 2.04-.78 2.82 0h.01c.78.79.78 2.05 0 2.83s-2.05.78-2.83 0-.79-2.05 0-2.83M12 1c1.11 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .89-2 2-2" />
    </IconBase>
  ))
);

CircleDotsBold.displayName = 'CircleDotsBold';

// Triple export pattern
export { CircleDotsBold, CircleDotsBold as CircleDotsBoldIcon, CircleDotsBold as SiCircleDotsBold };
export default CircleDotsBold;
export type { CircleDotsBoldProps };
