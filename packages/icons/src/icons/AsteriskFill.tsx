import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskFillProps = Omit<IconBaseProps, 'children'>;

const AsteriskFill = memo(
  forwardRef<SVGSVGElement, AsteriskFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.5c.83 0 1.5.67 1.5 1.5v5.53c0 .39.42.63.75.44l4.8-2.77c.71-.42 1.63-.17 2.05.55.41.71.16 1.63-.55 2.04l-4.8 2.77c-.33.2-.33.67 0 .87l4.8 2.77c.72.41.96 1.33.55 2.05s-1.33.96-2.05.54l-4.8-2.77c-.33-.2-.75.05-.75.44V21c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5.54c0-.38-.42-.62-.75-.43l-4.8 2.76c-.7.42-1.63.17-2.04-.54s-.17-1.64.55-2.05l4.8-2.77c.33-.2.33-.68 0-.87l-4.8-2.77c-.71-.4-.96-1.33-.55-2.04.42-.72 1.34-.97 2.05-.55l4.79 2.76c.33.2.75-.05.75-.43V3c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AsteriskFill.displayName = 'AsteriskFill';

// Triple export pattern
export { AsteriskFill, AsteriskFill as AsteriskFillIcon, AsteriskFill as SiAsteriskFill };
export default AsteriskFill;
export type { AsteriskFillProps };
