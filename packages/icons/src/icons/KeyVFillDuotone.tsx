import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyVFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5a5.5 5.5 0 0 1 2.5 10.4v2.4l1.76 1.75-.46.35-1.54 1.15L15.71 19 12 22.7l-2.5-2.5v-8.3A5.5 5.5 0 0 1 12 1.5M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

KeyVFillDuotone.displayName = 'KeyVFillDuotone';

// Triple export pattern (lucide-react style)
export { KeyVFillDuotone, KeyVFillDuotone as KeyVFillDuotoneIcon, KeyVFillDuotone as SiKeyVFillDuotone };
export default KeyVFillDuotone;
export type { KeyVFillDuotoneProps };
