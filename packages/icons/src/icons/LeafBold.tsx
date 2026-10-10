import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafBoldProps = Omit<IconBaseProps, 'children'>;

const LeafBold = memo(
  forwardRef<SVGSVGElement, LeafBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 3c0 4.05-.38 6.9-1.2 9.18-.85 2.3-2.13 3.93-3.78 5.59-2.72 2.71-6.97 2.95-9.96.71l-.5.72c-.47.71-.9 1.5-1.11 2.12-.18.52-.74.8-1.27.63-.52-.18-.8-.74-.63-1.27.3-.87.84-1.82 1.34-2.59q.38-.56.73-1.02c-2.35-3-2.14-7.33.61-10.1 1.32-1.3 2.7-2.6 4.96-3.52C12.42 2.53 15.43 2 20 2h1zm-2.01 1.01c-3.84.07-6.3.57-8.04 1.29-1.88.77-3.03 1.82-4.3 3.1-1.96 1.95-2.17 4.99-.65 7.18l3.38-3.37c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41L7.42 17c2.2 1.53 5.23 1.32 7.19-.64 1.53-1.53 2.6-2.93 3.3-4.86.66-1.78 1.02-4.1 1.08-7.48" clipRule="evenodd" />
    </IconBase>
  ))
);

LeafBold.displayName = 'LeafBold';

// Triple export pattern
export { LeafBold, LeafBold as LeafBoldIcon, LeafBold as SiLeafBold };
export default LeafBold;
export type { LeafBoldProps };
