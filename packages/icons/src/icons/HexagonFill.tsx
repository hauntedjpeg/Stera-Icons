import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HexagonFillProps = Omit<IconBaseProps, 'children'>;

const HexagonFill = memo(
  forwardRef<SVGSVGElement, HexagonFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.2 3.12c.95 0 1.63 0 2.25.2q.8.26 1.41.82c.48.44.8 1.04 1.28 1.88l1.8 3.2c.45.8.78 1.37.91 2q.16.78 0 1.57c-.13.62-.46 1.18-.91 2l-1.8 3.2c-.47.83-.8 1.43-1.28 1.87q-.61.56-1.4.82c-.63.2-1.3.2-2.27.2H9.81c-.96 0-1.64 0-2.27-.2q-.79-.26-1.4-.82c-.48-.44-.8-1.04-1.28-1.88l-1.8-3.2c-.45-.8-.78-1.37-.91-2q-.16-.78 0-1.57c.13-.62.46-1.18.91-2l1.8-3.2c.47-.83.8-1.43 1.28-1.87q.61-.56 1.4-.82c.63-.2 1.3-.2 2.27-.2z" />
    </IconBase>
  ))
);

HexagonFill.displayName = 'HexagonFill';

// Triple export pattern (lucide-react style)
export { HexagonFill, HexagonFill as HexagonFillIcon, HexagonFill as SiHexagonFill };
export default HexagonFill;
export type { HexagonFillProps };
