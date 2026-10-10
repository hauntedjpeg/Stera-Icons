import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseBoldProps = Omit<IconBaseProps, 'children'>;

const CheeseBold = memo(
  forwardRef<SVGSVGElement, CheeseBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.5 3.13q.36-.2.76-.1c1.03.28 2.59.93 4.06 2 1.48 1.06 2.94 2.59 3.63 4.65q.05.15.05.32v8c0 .51-.38.94-.89 1l-7 .77c-.28.03-.57-.06-.78-.25q-.31-.3-.33-.74V18c0-.55-.45-1-1-1s-1 .45-1 1v1.22c0 .51-.38.94-.89 1l-7 .77c-.28.04-.57-.06-.78-.24Q2.01 20.44 2 20v-2c0-.52.4-.94.9-1h.2c.5-.06.9-.48.9-1s-.4-.94-.9-1h-.2c-.5-.06-.9-.48-.9-1v-2c0-.32.15-.62.41-.8l11-8zm4.48 8.21C17.8 12.84 16.54 14 15 14c-1.31 0-2.42-.84-2.83-2.01l-8.17.9v.28c1.16.42 2 1.52 2 2.83 0 1.3-.84 2.41-2 2.83v.05l5-.55V18c0-1.66 1.34-3 3-3 1.54 0 2.81 1.16 2.98 2.66L20 17.1v-5.98zM6.64 10.6l6.25-.7q.47-.04.8.27c.21.2.33.49.31.78V11c0 .55.45 1 1 1s1-.45 1-1v-.56c0-.5.38-.93.89-.99l2.63-.3c-.59-1-1.44-1.83-2.37-2.5C16.1 5.89 15 5.38 14.18 5.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseBold.displayName = 'CheeseBold';

// Triple export pattern
export { CheeseBold, CheeseBold as CheeseBoldIcon, CheeseBold as SiCheeseBold };
export default CheeseBold;
export type { CheeseBoldProps };
