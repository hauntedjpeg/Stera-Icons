import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskFillDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 14.59V21c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-6.41l1.5-.87zM2.91 6.75c.42-.72 1.34-.97 2.05-.55l5.54 3.2v1.72L9 12 3.46 8.8c-.71-.41-.96-1.33-.55-2.04M19.05 6.2c.71-.42 1.63-.17 2.05.55.4.71.16 1.63-.55 2.05L15 12l-1.5-.88V9.4z" opacity={0.4} />
        <path d="M12 1.5c.83 0 1.5.67 1.5 1.5v8.13l7.05 4.07c.72.41.96 1.33.55 2.05s-1.33.96-2.05.54L12 13.72 4.96 17.8c-.72.42-1.64.17-2.05-.54s-.17-1.64.55-2.05l7.04-4.07V3c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AsteriskFillDuotone.displayName = 'AsteriskFillDuotone';

// Triple export pattern
export { AsteriskFillDuotone, AsteriskFillDuotone as AsteriskFillDuotoneIcon, AsteriskFillDuotone as SiAsteriskFillDuotone };
export default AsteriskFillDuotone;
export type { AsteriskFillDuotoneProps };
