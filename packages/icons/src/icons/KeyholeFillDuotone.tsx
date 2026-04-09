import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyholeFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyholeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyhole-fill-duotone" {...props}>
      <path d="M12 3.88a4.63 4.63 0 0 1 2.87 8.25.9.9 0 0 0-.24 1.08l2.68 5.37a.38.38 0 0 1-.33.55H7.02a.38.38 0 0 1-.33-.55l2.69-5.37a.9.9 0 0 0-.25-1.08A4.62 4.62 0 0 1 12 3.87" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13a6.38 6.38 0 0 1 4.5 10.9l2.38 4.77a2.13 2.13 0 0 1-1.9 3.07H7.02a2.12 2.12 0 0 1-1.9-3.07l2.39-4.78A6.37 6.37 0 0 1 12 2.12m0 1.75a4.62 4.62 0 0 0-2.87 8.25c.33.26.43.7.24 1.08L6.7 18.58c-.13.25.05.55.33.55h9.96c.28 0 .46-.3.33-.55l-2.68-5.37a.9.9 0 0 1 .24-1.08A4.62 4.62 0 0 0 12 3.87" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyholeFillDuotone.displayName = 'KeyholeFillDuotone';

// Triple export pattern (lucide-react style)
export { KeyholeFillDuotone, KeyholeFillDuotone as KeyholeFillDuotoneIcon, KeyholeFillDuotone as SiKeyholeFillDuotone };
export default KeyholeFillDuotone;
export type { KeyholeFillDuotoneProps };
