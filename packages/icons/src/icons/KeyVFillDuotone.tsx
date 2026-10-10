import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyVFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c3.04 0 5.5 2.46 5.5 5.5 0 2.14-1.22 3.99-3 4.9v2.4l1.76 1.75-.46.35-1.54 1.15L15.71 19 12 22.7l-2.5-2.5v-8.3c-1.78-.91-3-2.76-3-4.9 0-3.04 2.46-5.5 5.5-5.5M12 4c-.83 0-1.5.67-1.5 1.5S11.17 7 12 7s1.5-.67 1.5-1.5S12.83 4 12 4" clipRule="evenodd" opacity={.4} />
        <path d="M12 4c.83 0 1.5.67 1.5 1.5S12.83 7 12 7s-1.5-.67-1.5-1.5S11.17 4 12 4" />
    </IconBase>
  ))
);

KeyVFillDuotone.displayName = 'KeyVFillDuotone';

// Triple export pattern
export { KeyVFillDuotone, KeyVFillDuotone as KeyVFillDuotoneIcon, KeyVFillDuotone as SiKeyVFillDuotone };
export default KeyVFillDuotone;
export type { KeyVFillDuotoneProps };
