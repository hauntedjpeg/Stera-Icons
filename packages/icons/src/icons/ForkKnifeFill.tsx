import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForkKnifeFillProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeFill = memo(
  forwardRef<SVGSVGElement, ForkKnifeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 2c.55 0 1 .45 1 1v6q0 .15-.06.3l-1.18 2.74q-.26.61-.26 1.28v6.18c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25v-6.18q0-.66-.26-1.28L3.3 9.3q-.06-.15-.06-.3V3c0-.55.45-1 1-1s1 .45 1 1v5.25H6V3.5c0-.55.45-1 1-1s1 .45 1 1v4.75h.75V3c0-.55.45-1 1-1M19.83 2.27c.22-.05.46 0 .64.14q.27.23.28.59v16.5c0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25v-3.75H14c-.41 0-.75-.34-.75-.75 0-4.3.35-7.2 1.38-9.17 1.08-2.06 2.82-3 5.2-3.56" />
    </IconBase>
  ))
);

ForkKnifeFill.displayName = 'ForkKnifeFill';

// Triple export pattern
export { ForkKnifeFill, ForkKnifeFill as ForkKnifeFillIcon, ForkKnifeFill as SiForkKnifeFill };
export default ForkKnifeFill;
export type { ForkKnifeFillProps };
