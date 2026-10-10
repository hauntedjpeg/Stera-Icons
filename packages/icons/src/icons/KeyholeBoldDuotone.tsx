import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyholeBoldDuotone = memo(
  forwardRef<SVGSVGElement, KeyholeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.99 17.74c.75 1.5-.34 3.26-2.01 3.26H7.02c-1.67 0-2.76-1.76-2.01-3.26l2.35-4.7q.3.3.61.56c.43.34 1.06.27 1.4-.16q.07-.08.11-.17L6.8 18.64c-.08.16.04.36.22.36h9.96c.18 0 .3-.2.22-.36l-2.68-5.37.1.17c.35.43.98.5 1.4.16q.33-.26.62-.55z" opacity={.4} />
        <path d="M12 2c3.59 0 6.5 2.91 6.5 6.5 0 2.07-.97 3.91-2.47 5.1-.43.34-1.06.27-1.4-.16-.35-.44-.28-1.07.16-1.4 1.04-.83 1.71-2.1 1.71-3.54C16.5 6.01 14.49 4 12 4S7.5 6.01 7.5 8.5c0 1.43.67 2.7 1.71 3.53.44.34.5.97.17 1.4-.35.44-.98.51-1.4.17-1.51-1.19-2.48-3.03-2.48-5.1C5.5 4.91 8.41 2 12 2" />
    </IconBase>
  ))
);

KeyholeBoldDuotone.displayName = 'KeyholeBoldDuotone';

// Triple export pattern
export { KeyholeBoldDuotone, KeyholeBoldDuotone as KeyholeBoldDuotoneIcon, KeyholeBoldDuotone as SiKeyholeBoldDuotone };
export default KeyholeBoldDuotone;
export type { KeyholeBoldDuotoneProps };
