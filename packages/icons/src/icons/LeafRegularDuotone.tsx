import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LeafRegularDuotone = memo(
  forwardRef<SVGSVGElement, LeafRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.55 12.38c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.06L6.47 17.6c-.19.18-.64.75-1.12 1.47-.47.72-.92 1.52-1.14 2.18-.13.39-.55.6-.95.47s-.6-.55-.47-.95c.28-.84.81-1.77 1.31-2.53s1.02-1.41 1.31-1.7z" />
        <path d="M20.75 3c0 4.04-.38 6.86-1.2 9.1-.82 2.25-2.07 3.85-3.7 5.49-2.7 2.69-6.94 2.87-9.83.54q.3-.4.45-.54l.57-.57c2.3 1.79 5.63 1.62 7.74-.5 1.55-1.54 2.65-2.97 3.37-4.94.68-1.87 1.05-4.28 1.1-7.83-4.02.06-6.57.57-8.4 1.32-1.92.79-3.1 1.87-4.38 3.15-2.11 2.11-2.28 5.44-.5 7.74l-.56.57q-.18.18-.47.54c-2.4-2.9-2.24-7.2.47-9.91 1.31-1.32 2.66-2.57 4.87-3.48 2.2-.9 5.17-1.43 9.72-1.43h.75z" opacity={.4} />
    </IconBase>
  ))
);

LeafRegularDuotone.displayName = 'LeafRegularDuotone';

// Triple export pattern
export { LeafRegularDuotone, LeafRegularDuotone as LeafRegularDuotoneIcon, LeafRegularDuotone as SiLeafRegularDuotone };
export default LeafRegularDuotone;
export type { LeafRegularDuotoneProps };
