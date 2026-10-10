import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, BellOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.9 7.96q-.15.65-.15 1.34v.38c0 1.34-.4 2.64-1.13 3.75L4.7 14.8c-.56.83.04 1.94 1.04 1.94h9.95l1.5 1.5h-1c-.36 1.99-2.1 3.5-4.2 3.5-2.08 0-3.82-1.51-4.17-3.5H5.74c-2.2 0-3.5-2.45-2.3-4.28l.93-1.37c.57-.87.88-1.88.88-2.92V9.3q0-1.35.45-2.54zm2.46 10.29c.32 1.15 1.38 2 2.64 2s2.32-.85 2.64-2z" clipRule="evenodd" opacity={0.4} />
        <path d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37c.46.69.56 1.47.39 2.17-.1.4-.5.65-.9.55s-.66-.5-.56-.9q.13-.5-.18-.98l-.92-1.38c-.73-1.11-1.13-2.41-1.13-3.75V9.3c0-3.1-2.38-5.55-5.25-5.55-1.15 0-2.22.4-3.09 1.06-.32.25-.8.2-1.05-.14-.25-.33-.19-.8.14-1.05 1.12-.86 2.5-1.37 4-1.37" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16c.3.3.3.77 0 1.06s-.77.3-1.06 0l-16-16c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

BellOffRegularDuotone.displayName = 'BellOffRegularDuotone';

// Triple export pattern
export { BellOffRegularDuotone, BellOffRegularDuotone as BellOffRegularDuotoneIcon, BellOffRegularDuotone as SiBellOffRegularDuotone };
export default BellOffRegularDuotone;
export type { BellOffRegularDuotoneProps };
