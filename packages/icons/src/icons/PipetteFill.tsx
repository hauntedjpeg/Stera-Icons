import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteFillProps = Omit<IconBaseProps, 'children'>;

const PipetteFill = memo(
  forwardRef<SVGSVGElement, PipetteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pipette-fill" {...props}>
      <path fillRule="evenodd" d="M15.51 3.63a3.43 3.43 0 0 1 4.86 4.86l-1.92 1.91.11.1a2.92 2.92 0 0 1-4.13 4.14l-.1-.1-5.4 5.39a4.95 4.95 0 0 1-5.45 1.04l-.32-.13-.13-.32a4.95 4.95 0 0 1 1.04-5.45l5.4-5.4-.1-.1a2.92 2.92 0 0 1 4.12-4.13l.1.1zM5.31 16.31a3.2 3.2 0 0 0-.8 3.18 3.2 3.2 0 0 0 3.18-.8l5.4-5.4-2.39-2.38z" clipRule="evenodd" />
    </IconBase>
  ))
);

PipetteFill.displayName = 'PipetteFill';

// Triple export pattern (lucide-react style)
export { PipetteFill, PipetteFill as PipetteFillIcon, PipetteFill as SiPipetteFill };
export default PipetteFill;
export type { PipetteFillProps };
