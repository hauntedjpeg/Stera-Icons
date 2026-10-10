import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyHRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 6.25c3.18 0 5.75 2.57 5.75 5.75s-2.57 5.75-5.75 5.75c-2.18 0-4.07-1.21-5.05-3H9.81l-1.28 1.28q-.24.23-.58.22-.34-.04-.55-.3l-.98-1.3-.89.88c-.3.3-.77.3-1.06 0l-3-3c-.3-.3-.3-.77 0-1.06l2-2q.22-.21.53-.22h7.95c.98-1.79 2.87-3 5.05-3m0 1.5c-1.74 0-3.24 1.05-3.9 2.55-.12.27-.39.45-.68.45h-8.1L3.05 12 5 13.94l.97-.97c.15-.15.37-.23.58-.22q.34.04.55.3l.98 1.3.89-.88q.22-.21.53-.22h2.92c.3 0 .56.18.68.45.66 1.5 2.16 2.55 3.9 2.55 2.35 0 4.25-1.9 4.25-4.25S19.35 7.75 17 7.75" clipRule="evenodd" opacity={.4} />
        <path d="M18.5 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

KeyHRegularDuotone.displayName = 'KeyHRegularDuotone';

// Triple export pattern
export { KeyHRegularDuotone, KeyHRegularDuotone as KeyHRegularDuotoneIcon, KeyHRegularDuotone as SiKeyHRegularDuotone };
export default KeyHRegularDuotone;
export type { KeyHRegularDuotoneProps };
