import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentRegular = memo(
  forwardRef<SVGSVGElement, CurrencyCentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2.75q.46.03.94.1c1.43.24 2.76.9 3.81 1.9.3.29.31.76.03 1.06s-.76.31-1.06.03c-.84-.8-1.9-1.32-3.03-1.51q-.35-.06-.69-.07v11.48q.67-.02 1.32-.2c1.1-.32 2.1-.96 2.83-1.84.27-.32.74-.36 1.06-.1.32.27.36.74.1 1.06-.94 1.11-2.19 1.92-3.59 2.32q-.84.23-1.72.26V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.86q-.53-.1-1.04-.26c-1.38-.46-2.59-1.32-3.47-2.48-.88-1.15-1.4-2.54-1.48-4-.08-1.45.28-2.89 1.03-4.13.74-1.25 1.85-2.24 3.17-2.85q.86-.4 1.8-.56V2c0-.41.33-.75.74-.75m-.75 5.14q-.6.13-1.16.39c-1.05.48-1.92 1.27-2.52 2.26s-.87 2.13-.81 3.28.47 2.26 1.17 3.17 1.66 1.6 2.76 1.97q.27.08.56.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCentRegular.displayName = 'CurrencyCentRegular';

// Triple export pattern
export { CurrencyCentRegular, CurrencyCentRegular as CurrencyCentRegularIcon, CurrencyCentRegular as SiCurrencyCentRegular };
export default CurrencyCentRegular;
export type { CurrencyCentRegularProps };
