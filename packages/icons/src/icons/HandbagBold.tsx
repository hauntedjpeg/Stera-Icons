import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagBoldProps = Omit<IconBaseProps, 'children'>;

const HandbagBold = memo(
  forwardRef<SVGSVGElement, HandbagBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.5c2.49 0 4.5 2.01 4.5 4.5v.56q.55.05 1.03.24 1 .41 1.64 1.26c.52.67.73 1.55 1.05 2.73l.11.4q.43 1.5.62 2.5c.12.68.15 1.32-.03 1.94-.28.95-.9 1.76-1.74 2.28-.56.34-1.19.47-1.87.53q-1.01.07-2.58.06H9.27q-1.57.02-2.58-.06c-.68-.06-1.31-.2-1.86-.53-.85-.52-1.47-1.33-1.75-2.28-.18-.62-.15-1.26-.03-1.94q.2-1 .62-2.5l.1-.4c.33-1.18.54-2.06 1.06-2.73q.66-.84 1.64-1.26.48-.19 1.03-.24V8c0-2.49 2.02-4.5 4.5-4.5m-2.62 7c-1.41 0-1.82.02-2.15.15q-.49.21-.82.63c-.21.28-.34.67-.7 2.03l-.11.4c-.28 1.05-.48 1.77-.58 2.33-.1.55-.08.84-.02 1.03.14.47.45.88.87 1.14.17.1.44.19 1 .24s1.31.05 2.4.05h5.46c1.09 0 1.83 0 2.4-.05s.83-.14 1-.24c.42-.26.73-.67.87-1.14.06-.2.08-.48-.02-1.03-.1-.56-.3-1.28-.58-2.33l-.1-.4c-.37-1.36-.5-1.75-.71-2.03q-.34-.43-.82-.63c-.33-.13-.74-.15-2.15-.15zm2.62-5c-1.38 0-2.5 1.12-2.5 2.5v.5h5V8c0-1.38-1.12-2.5-2.5-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagBold.displayName = 'HandbagBold';

// Triple export pattern
export { HandbagBold, HandbagBold as HandbagBoldIcon, HandbagBold as SiHandbagBold };
export default HandbagBold;
export type { HandbagBoldProps };
