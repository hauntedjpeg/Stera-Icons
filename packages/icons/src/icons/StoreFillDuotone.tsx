import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StoreFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StoreFillDuotone = memo(
  forwardRef<SVGSVGElement, StoreFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="store-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M15 10.94a3.8 3.8 0 0 0 5.08.81V16q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32a3.4 3.4 0 0 1-1.48 1.48q-.6.28-1.32.33-.68.05-1.71.04H8.8q-1.03.01-1.71-.04c-.47-.04-.91-.12-1.32-.33a3.4 3.4 0 0 1-1.48-1.48q-.29-.6-.33-1.32-.05-.68-.04-1.71v-4.25a3.8 3.8 0 0 0 5.08-.8c.74.86 1.8 1.43 3 1.43s2.26-.57 3-1.44m-3 3.76c-.7 0-1.05 0-1.32.14q-.35.18-.54.54C10 15.65 10 16 10 16.7V19h4v-2.3c0-.7 0-1.05-.14-1.32a1.3 1.3 0 0 0-.54-.54c-.27-.14-.62-.14-1.32-.14" clipRule="evenodd" opacity={.4} />
        <path d="M17.27 3.13c1.53 0 2.89.97 3.38 2.41l.94 2.74c.2.6.26 1.39-.16 2.08A4 4 0 0 1 18 12.38c-1.2 0-2.26-.57-3-1.44a4 4 0 0 1-3 1.44c-1.2 0-2.26-.57-3-1.44a4 4 0 0 1-3 1.44c-1.46 0-2.7-.84-3.43-2.02a2.4 2.4 0 0 1-.16-2.08l.94-2.74a3.6 3.6 0 0 1 3.38-2.41zM14 16.7V19h-4v-2.3c0-.7 0-1.05.14-1.32q.18-.35.54-.54c.27-.14.62-.14 1.32-.14s1.05 0 1.32.14q.35.18.54.54c.14.27.14.62.14 1.32" />
    </IconBase>
  ))
);

StoreFillDuotone.displayName = 'StoreFillDuotone';

// Triple export pattern (lucide-react style)
export { StoreFillDuotone, StoreFillDuotone as StoreFillDuotoneIcon, StoreFillDuotone as SiStoreFillDuotone };
export default StoreFillDuotone;
export type { StoreFillDuotoneProps };
