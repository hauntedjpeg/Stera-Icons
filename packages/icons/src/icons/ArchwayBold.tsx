import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayBoldProps = Omit<IconBaseProps, 'children'>;

const ArchwayBold = memo(
  forwardRef<SVGSVGElement, ArchwayBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c4.42 0 8 3.58 8 8v6.2q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q4 17.43 4 16.2V10c0-4.42 3.58-8 8-8m0 2c-3.31 0-6 2.69-6 6v6.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V10c0-3.31-2.69-6-6-6" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchwayBold.displayName = 'ArchwayBold';

// Triple export pattern
export { ArchwayBold, ArchwayBold as ArchwayBoldIcon, ArchwayBold as SiArchwayBold };
export default ArchwayBold;
export type { ArchwayBoldProps };
