import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlienRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlienRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlienRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c4.85 0 8.75 4.01 8.75 8.93 0 2.13-1.07 4.05-2.37 5.6s-2.9 2.82-4.1 3.67c-1.38.96-3.18.96-4.55 0-1.2-.85-2.8-2.12-4.11-3.67-1.3-1.55-2.37-3.47-2.37-5.6 0-4.92 3.9-8.93 8.75-8.93m0 1.5c-3.99 0-7.25 3.31-7.25 7.43 0 1.63.83 3.21 2.02 4.63 1.18 1.42 2.66 2.6 3.82 3.4.86.6 1.96.6 2.82 0 1.16-.8 2.64-1.98 3.82-3.4 1.2-1.42 2.02-3 2.02-4.63 0-4.12-3.26-7.43-7.25-7.43" clipRule="evenodd" opacity={.4} />
        <path d="M13.2 15.2c.4-.1.8.2.8.63 0 .4-.27.74-.65.83l-.86.22q-.49.12-.98 0l-.86-.22c-.38-.1-.65-.44-.65-.83 0-.42.4-.73.8-.63l.79.2q.41.09.82 0zM8 9c1.66 0 3 1.34 3 3 0 .55-.45 1-1 1-1.66 0-3-1.34-3-3 0-.55.45-1 1-1M16 9c.55 0 1 .45 1 1 0 1.66-1.34 3-3 3-.55 0-1-.45-1-1 0-1.66 1.34-3 3-3" />
    </IconBase>
  ))
);

AlienRegularDuotone.displayName = 'AlienRegularDuotone';

// Triple export pattern
export { AlienRegularDuotone, AlienRegularDuotone as AlienRegularDuotoneIcon, AlienRegularDuotone as SiAlienRegularDuotone };
export default AlienRegularDuotone;
export type { AlienRegularDuotoneProps };
