import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForkKnifeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeFillDuotone = memo(
  forwardRef<SVGSVGElement, ForkKnifeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.25 19.5c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25v-6.98q.22.22.54.23H8.7q.32-.01.54-.23zM19.83 2.27c.22-.05.46 0 .64.14q.27.23.28.59v12.75H14c-.41 0-.75-.34-.75-.75 0-4.3.35-7.2 1.38-9.17 1.08-2.06 2.82-3 5.2-3.56" opacity={0.4} />
        <path d="M9.75 2c.55 0 1 .45 1 1v6q0 .15-.06.3l-1.29 3c-.11.27-.39.45-.69.45H5.3c-.3 0-.58-.18-.7-.45l-1.28-3q-.06-.15-.06-.3V3c0-.55.45-1 1-1s1 .45 1 1v5.25H6V3.5c0-.55.45-1 1-1s1 .45 1 1v4.75h.75V3c0-.55.45-1 1-1M20.75 19.5c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25v-3.75h4.5z" />
    </IconBase>
  ))
);

ForkKnifeFillDuotone.displayName = 'ForkKnifeFillDuotone';

// Triple export pattern
export { ForkKnifeFillDuotone, ForkKnifeFillDuotone as ForkKnifeFillDuotoneIcon, ForkKnifeFillDuotone as SiForkKnifeFillDuotone };
export default ForkKnifeFillDuotone;
export type { ForkKnifeFillDuotoneProps };
