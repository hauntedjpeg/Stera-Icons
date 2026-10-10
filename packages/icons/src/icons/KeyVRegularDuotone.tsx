import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyVRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c3.18 0 5.75 2.57 5.75 5.75 0 2.18-1.21 4.07-3 5.05v2.14l1.28 1.28q.23.24.22.58-.04.34-.3.55l-1.3.98.88.89c.3.3.3.77 0 1.06l-3 3c-.3.3-.77.3-1.06 0l-2-2q-.21-.22-.22-.53v-7.95c-1.79-.98-3-2.87-3-5.05 0-3.18 2.57-5.75 5.75-5.75m0 1.5c-2.35 0-4.25 1.9-4.25 4.25 0 1.74 1.05 3.24 2.55 3.9.27.12.45.39.45.68v8.1L12 20.95 13.94 19l-.97-.97c-.15-.15-.23-.37-.22-.58q.04-.34.3-.55l1.3-.98-.88-.89q-.21-.22-.22-.53v-2.92c0-.3.18-.56.45-.68 1.5-.66 2.55-2.16 2.55-3.9 0-2.35-1.9-4.25-4.25-4.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 4.25c.69 0 1.25.56 1.25 1.25S12.69 6.75 12 6.75s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

KeyVRegularDuotone.displayName = 'KeyVRegularDuotone';

// Triple export pattern
export { KeyVRegularDuotone, KeyVRegularDuotone as KeyVRegularDuotoneIcon, KeyVRegularDuotone as SiKeyVRegularDuotone };
export default KeyVRegularDuotone;
export type { KeyVRegularDuotoneProps };
