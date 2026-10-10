import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LeafBoldDuotone = memo(
  forwardRef<SVGSVGElement, LeafBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 3c0 4.05-.38 6.9-1.2 9.18-.85 2.3-2.13 3.93-3.78 5.59-2.71 2.71-6.97 2.95-9.96.71q.42-.53.59-.72l.77-.77c2.2 1.53 5.23 1.32 7.19-.64 1.53-1.53 2.6-2.93 3.3-4.86.65-1.78 1.02-4.1 1.08-7.48-3.84.07-6.3.57-8.04 1.29-1.88.77-3.03 1.82-4.3 3.1-1.96 1.95-2.17 4.99-.65 7.18l-.77.77q-.24.25-.6.72c-2.36-3-2.15-7.33.6-10.1 1.32-1.3 2.7-2.6 4.96-3.52C12.42 2.53 15.43 2 20 2h1z" opacity={.4} />
        <path d="M9.38 12.2c.39-.38 1.02-.38 1.41 0 .4.4.4 1.03 0 1.42l-4.14 4.14c-.17.17-.61.72-1.09 1.44-.47.71-.9 1.49-1.11 2.12-.18.52-.74.8-1.27.63-.52-.18-.8-.74-.63-1.27.3-.87.84-1.82 1.34-2.59.5-.75 1.03-1.43 1.34-1.74z" />
    </IconBase>
  ))
);

LeafBoldDuotone.displayName = 'LeafBoldDuotone';

// Triple export pattern
export { LeafBoldDuotone, LeafBoldDuotone as LeafBoldDuotoneIcon, LeafBoldDuotone as SiLeafBoldDuotone };
export default LeafBoldDuotone;
export type { LeafBoldDuotoneProps };
