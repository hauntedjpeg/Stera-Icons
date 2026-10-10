import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointBoldDuotone = memo(
  forwardRef<SVGSVGElement, ExclamationPointBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" opacity={.4} />
        <path d="M12 2.5c.42 0 .82.16 1.1.44q.42.44.4 1.06l-.03.53-.44 9.45-.03.52q-.03.4-.32.67-.29.28-.68.28t-.68-.28c-.2-.17-.3-.42-.32-.67l-.03-.52-.44-9.45L10.5 4c-.02-.4.12-.78.4-1.06s.68-.44 1.1-.44" />
    </IconBase>
  ))
);

ExclamationPointBoldDuotone.displayName = 'ExclamationPointBoldDuotone';

// Triple export pattern
export { ExclamationPointBoldDuotone, ExclamationPointBoldDuotone as ExclamationPointBoldDuotoneIcon, ExclamationPointBoldDuotone as SiExclamationPointBoldDuotone };
export default ExclamationPointBoldDuotone;
export type { ExclamationPointBoldDuotoneProps };
