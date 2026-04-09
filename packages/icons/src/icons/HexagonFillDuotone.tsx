import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HexagonFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HexagonFillDuotone = memo(
  forwardRef<SVGSVGElement, HexagonFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hexagon-fill-duotone" {...props}>
      <path d="M14.2 4.88c1.07 0 1.42 0 1.71.1q.44.15.77.45c.23.2.4.5.93 1.45l1.8 3.2c.52.9.67 1.2.73 1.49q.09.43 0 .86c-.06.3-.21.59-.73 1.5l-1.8 3.2c-.53.94-.7 1.23-.93 1.44q-.33.3-.77.45c-.3.1-.64.1-1.72.1H9.81a6 6 0 0 1-1.72-.1q-.43-.15-.77-.45c-.23-.2-.4-.5-.93-1.45l-1.8-3.2c-.51-.9-.67-1.2-.73-1.49a2 2 0 0 1 0-.86c.06-.3.22-.59.73-1.5l1.8-3.2c.53-.94.7-1.23.93-1.44q.34-.3.77-.45c.3-.1.64-.1 1.72-.1z" opacity={.4} />
        <path fillRule="evenodd" d="M14.2 3.12c.95 0 1.63 0 2.25.2q.8.26 1.41.82c.48.44.8 1.04 1.28 1.88l1.8 3.2c.45.8.78 1.37.91 2q.16.78 0 1.57c-.13.62-.46 1.18-.91 2l-1.8 3.2c-.47.83-.8 1.43-1.28 1.87q-.61.56-1.4.82c-.63.2-1.3.2-2.27.2H9.81c-.96 0-1.64 0-2.27-.2q-.79-.26-1.4-.82c-.48-.44-.8-1.04-1.28-1.88l-1.8-3.2c-.45-.8-.78-1.37-.91-2q-.16-.78 0-1.57c.13-.62.46-1.18.91-2l1.8-3.2c.47-.83.8-1.43 1.28-1.87q.61-.56 1.4-.82c.63-.2 1.3-.2 2.27-.2zM9.8 4.87c-1.07 0-1.42.02-1.7.11q-.45.15-.78.45c-.23.2-.4.5-.93 1.45l-1.8 3.2c-.51.9-.67 1.2-.73 1.49q-.09.43 0 .86c.06.3.22.59.73 1.5l1.8 3.2c.53.94.7 1.23.93 1.44q.34.3.77.45c.3.1.64.1 1.72.1h4.38c1.08 0 1.43 0 1.72-.1q.43-.15.77-.45c.23-.2.4-.5.93-1.45l1.8-3.2c.51-.9.67-1.2.73-1.49q.09-.43 0-.86c-.06-.3-.22-.59-.73-1.5l-1.8-3.2a6 6 0 0 0-.93-1.44q-.34-.3-.77-.45c-.3-.1-.64-.1-1.72-.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

HexagonFillDuotone.displayName = 'HexagonFillDuotone';

// Triple export pattern (lucide-react style)
export { HexagonFillDuotone, HexagonFillDuotone as HexagonFillDuotoneIcon, HexagonFillDuotone as SiHexagonFillDuotone };
export default HexagonFillDuotone;
export type { HexagonFillDuotoneProps };
