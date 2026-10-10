import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteFillProps = Omit<IconBaseProps, 'children'>;

const PipetteFill = memo(
  forwardRef<SVGSVGElement, PipetteFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.51 3.63c1.34-1.34 3.52-1.34 4.86 0s1.34 3.52 0 4.86l-1.92 1.91.11.1c1.14 1.15 1.14 3 0 4.14s-3 1.14-4.13 0l-.1-.1-5.4 5.39c-1.43 1.43-3.59 1.84-5.45 1.04l-.32-.13-.13-.32c-.8-1.86-.39-4.02 1.04-5.45l5.4-5.4-.1-.1c-1.15-1.14-1.15-2.99 0-4.13 1.13-1.14 2.98-1.14 4.12 0l.1.1zM5.31 16.31c-.84.84-1.13 2.06-.8 3.18 1.12.33 2.34.04 3.18-.8l5.4-5.4-2.39-2.38z" clipRule="evenodd" />
    </IconBase>
  ))
);

PipetteFill.displayName = 'PipetteFill';

// Triple export pattern
export { PipetteFill, PipetteFill as PipetteFillIcon, PipetteFill as SiPipetteFill };
export default PipetteFill;
export type { PipetteFillProps };
