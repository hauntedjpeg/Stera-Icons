import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StoreFillProps = Omit<IconBaseProps, 'children'>;

const StoreFill = memo(
  forwardRef<SVGSVGElement, StoreFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.27 3.13c1.53 0 2.89.97 3.38 2.41l.94 2.74c.2.6.26 1.39-.16 2.08q-.52.85-1.35 1.4V16q.01 1.03-.04 1.71c-.04.47-.12.91-.33 1.32q-.5.97-1.48 1.48-.6.28-1.32.33-.68.05-1.71.04H8.8q-1.03.01-1.71-.04c-.47-.04-.91-.12-1.32-.33q-.97-.5-1.48-1.48-.29-.6-.33-1.32-.05-.68-.04-1.71v-4.25q-.82-.54-1.35-1.4c-.42-.69-.37-1.47-.16-2.07l.94-2.74c.5-1.44 1.85-2.41 3.38-2.41zM12 14.7c-.7 0-1.05 0-1.32.14q-.35.18-.54.54C10 15.65 10 16 10 16.7V19h4v-2.3c0-.7 0-1.05-.14-1.32q-.18-.35-.54-.54c-.27-.14-.62-.14-1.32-.14M6.73 4.88c-.78 0-1.48.5-1.73 1.23l-.94 2.74c-.1.28-.06.49 0 .6.46.74 1.18 1.18 1.94 1.18.91 0 1.78-.64 2.18-1.7l.04-.08.02-.03q.15-.26.42-.38.16-.06.34-.06.14-.01.26.04.26.08.43.29l.07.1.06.13c.4 1.05 1.27 1.69 2.18 1.69s1.78-.64 2.18-1.7l.04-.08.02-.03q.15-.26.42-.38.16-.06.34-.06.14-.01.26.04.26.08.43.29.08.1.13.23c.3.79.86 1.34 1.51 1.57q.16.06.33.09t.34.03c.76 0 1.48-.44 1.94-1.19.06-.1.1-.3 0-.59L19 6.11c-.25-.74-.95-1.23-1.73-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreFill.displayName = 'StoreFill';

// Triple export pattern
export { StoreFill, StoreFill as StoreFillIcon, StoreFill as SiStoreFill };
export default StoreFill;
export type { StoreFillProps };
