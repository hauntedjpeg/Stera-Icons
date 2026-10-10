import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskBoldProps = Omit<IconBaseProps, 'children'>;

const AsteriskBold = memo(
  forwardRef<SVGSVGElement, AsteriskBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c.55 0 1 .45 1 1v6.4c0 .38.42.62.75.43l5.55-3.2c.47-.28 1.09-.11 1.36.37.28.47.11 1.09-.36 1.36l-5.55 3.2c-.33.2-.33.67 0 .87l5.55 3.2c.48.28.64.89.37 1.37-.28.47-.89.64-1.37.36l-5.55-3.2c-.33-.2-.75.04-.75.43V21c0 .55-.45 1-1 1s-1-.45-1-1v-6.4c0-.39-.42-.63-.75-.44l-5.54 3.2c-.48.28-1.1.11-1.37-.36-.27-.48-.1-1.1.37-1.37l5.55-3.2c.33-.2.33-.68 0-.87L3.7 8.36c-.47-.27-.64-.89-.36-1.36.27-.48.89-.65 1.36-.37l5.54 3.2c.33.19.75-.05.75-.44V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

AsteriskBold.displayName = 'AsteriskBold';

// Triple export pattern
export { AsteriskBold, AsteriskBold as AsteriskBoldIcon, AsteriskBold as SiAsteriskBold };
export default AsteriskBold;
export type { AsteriskBoldProps };
