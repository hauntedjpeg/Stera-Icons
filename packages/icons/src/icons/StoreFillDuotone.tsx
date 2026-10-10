import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StoreFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StoreFillDuotone = memo(
  forwardRef<SVGSVGElement, StoreFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 10.94c.74.87 1.8 1.44 3 1.44.77 0 1.47-.24 2.08-.63V16q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32q-.5.97-1.48 1.48-.6.28-1.32.33-.68.05-1.71.04H8.8q-1.03.01-1.71-.04c-.47-.04-.91-.12-1.32-.33q-.97-.5-1.48-1.48-.29-.6-.33-1.32-.05-.68-.04-1.71v-4.25q.91.62 2.08.63c1.2 0 2.26-.57 3-1.44.74.87 1.8 1.44 3 1.44s2.26-.57 3-1.44m-3 3.76c-.7 0-1.05 0-1.32.14q-.35.18-.54.54C10 15.65 10 16 10 16.7V19h4v-2.3c0-.7 0-1.05-.14-1.32q-.18-.35-.54-.54c-.27-.14-.62-.14-1.32-.14" clipRule="evenodd" opacity={.4} />
        <path d="M17.27 3.13c1.53 0 2.89.97 3.38 2.41l.94 2.74c.2.6.26 1.39-.16 2.08-.73 1.18-1.97 2.02-3.43 2.02-1.2 0-2.26-.57-3-1.44-.74.87-1.8 1.44-3 1.44s-2.26-.57-3-1.44c-.74.87-1.8 1.44-3 1.44-1.46 0-2.7-.84-3.43-2.02-.42-.7-.37-1.48-.16-2.08l.94-2.74c.5-1.44 1.85-2.41 3.38-2.41zM14 16.7V19h-4v-2.3c0-.7 0-1.05.14-1.32q.18-.35.54-.54c.27-.14.62-.14 1.32-.14s1.05 0 1.32.14q.35.18.54.54c.14.27.14.62.14 1.32" />
    </IconBase>
  ))
);

StoreFillDuotone.displayName = 'StoreFillDuotone';

// Triple export pattern
export { StoreFillDuotone, StoreFillDuotone as StoreFillDuotoneIcon, StoreFillDuotone as SiStoreFillDuotone };
export default StoreFillDuotone;
export type { StoreFillDuotoneProps };
