import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HexagonBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HexagonBoldDuotone = memo(
  forwardRef<SVGSVGElement, HexagonBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.94 12q0 .2.04.4c.06.27.2.55.72 1.46l1.8 3.2c.53.95.7 1.23.9 1.42q.32.29.73.42c.27.09.59.1 1.68.1h4.38c1.1 0 1.41-.01 1.68-.1q.41-.14.73-.42c.2-.2.37-.47.9-1.42l1.8-3.2c.52-.91.66-1.19.72-1.45q.03-.2.04-.41h2q0 .41-.09.81c-.13.65-.47 1.23-.92 2.03l-1.8 3.2c-.47.83-.8 1.45-1.3 1.91q-.64.58-1.45.85c-.65.21-1.35.2-2.3.2H9.8c-.95 0-1.65.01-2.3-.2q-.8-.27-1.45-.85c-.5-.46-.83-1.08-1.3-1.9l-1.8-3.2c-.45-.8-.79-1.4-.92-2.04q-.09-.4-.09-.81z" opacity={.4} />
        <path d="M14.2 3c.95 0 1.65-.01 2.3.2q.8.28 1.45.85c.5.46.83 1.08 1.3 1.9l1.8 3.2c.45.8.8 1.4.92 2.04q.09.4.09.81h-2q0-.2-.04-.4c-.06-.27-.2-.55-.72-1.46l-1.8-3.2c-.53-.95-.7-1.23-.9-1.42q-.32-.29-.73-.42C15.6 5 15.28 5 14.19 5H9.81c-1.1 0-1.41.01-1.68.1q-.41.13-.72.42c-.21.2-.38.47-.91 1.42l-1.8 3.2c-.52.91-.66 1.19-.72 1.45q-.04.2-.04.41h-2q0-.41.09-.81c.13-.65.47-1.23.92-2.03l1.8-3.2c.47-.83.8-1.45 1.3-1.91q.64-.58 1.46-.85c.64-.21 1.34-.2 2.3-.2z" />
    </IconBase>
  ))
);

HexagonBoldDuotone.displayName = 'HexagonBoldDuotone';

// Triple export pattern
export { HexagonBoldDuotone, HexagonBoldDuotone as HexagonBoldDuotoneIcon, HexagonBoldDuotone as SiHexagonBoldDuotone };
export default HexagonBoldDuotone;
export type { HexagonBoldDuotoneProps };
