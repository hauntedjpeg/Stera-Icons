import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Gauge50FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Gauge50FillDuotone = memo(
  forwardRef<SVGSVGElement, Gauge50FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.34c2.2 0 4.23.78 5.8 2.08L16.33 7.9a.87.87 0 1 0 1.24 1.23l1.47-1.47a9 9 0 0 1 2.04 4.93H19a.87.87 0 1 0 0 1.75h2.08a9 9 0 0 1-2.04 4.92l-1.47-1.46a.88.88 0 0 0-1.23 1.23l.62.63H7.04l.63-.63a.88.88 0 0 0-1.24-1.23l-1.47 1.46a9 9 0 0 1-2.04-4.92H5a.88.88 0 0 0 0-1.75H2.92a9 9 0 0 1 2.04-4.93l1.48 1.47A.87.87 0 1 0 7.67 7.9L6.2 6.42A9 9 0 0 1 12 4.34m0 1.37c-.32 0-.6.21-.7.5l-.04.14-.01.07-.03.2-.1.7-.34 2.19a105 105 0 0 0-.53 3.95 1.75 1.75 0 1 0 3.5-.05c-.04-.5-.3-2.28-.53-3.9l-.33-2.2-.1-.7-.04-.2v-.05A.75.75 0 0 0 12 5.7" clipRule="evenodd" opacity={.4} />
        <path d="M12 5.71c.37 0 .69.27.74.64l.01.07.03.2.1.7.34 2.19a105 105 0 0 1 .53 3.95 1.75 1.75 0 1 1-3.5-.05c.04-.5.3-2.28.53-3.9l.33-2.2.1-.7.04-.2v-.05l.04-.14c.1-.3.39-.5.71-.5" />
        <path fillRule="evenodd" d="M12 2.59a10.88 10.88 0 0 1 7.7 18.57.9.9 0 0 1-.65.25H4.95a.9.9 0 0 1-.71-.33A10.88 10.88 0 0 1 12 2.59m0 1.75c-2.2 0-4.23.78-5.8 2.08L7.67 7.9a.88.88 0 0 1-1.23 1.23L4.96 7.66a9 9 0 0 0-2.04 4.93H5a.87.87 0 1 1 0 1.75H2.92a9 9 0 0 0 2.04 4.92l1.47-1.46a.88.88 0 0 1 1.24 1.23l-.63.63h9.92l-.62-.63a.87.87 0 1 1 1.23-1.23l1.47 1.46a9 9 0 0 0 2.04-4.92H19a.88.88 0 0 1 0-1.75h2.08a9 9 0 0 0-2.04-4.93l-1.47 1.47a.87.87 0 1 1-1.24-1.23l1.47-1.48A9 9 0 0 0 12 4.34" clipRule="evenodd" />
    </IconBase>
  ))
);

Gauge50FillDuotone.displayName = 'Gauge50FillDuotone';

// Triple export pattern (lucide-react style)
export { Gauge50FillDuotone, Gauge50FillDuotone as Gauge50FillDuotoneIcon, Gauge50FillDuotone as SiGauge50FillDuotone };
export default Gauge50FillDuotone;
export type { Gauge50FillDuotoneProps };
