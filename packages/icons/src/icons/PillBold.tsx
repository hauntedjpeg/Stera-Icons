import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillBoldProps = Omit<IconBaseProps, 'children'>;

const PillBold = memo(
  forwardRef<SVGSVGElement, PillBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.8 3.8c2.04-2.05 5.36-2.05 7.4 0s2.05 5.36 0 7.4l-9 9c-2.04 2.05-5.36 2.05-7.4 0s-2.05-5.36 0-7.4zM5.2 14.2c-1.26 1.27-1.26 3.33 0 4.6 1.27 1.26 3.33 1.26 4.6 0l3.79-3.8L9 10.41zm13.6-9c-1.27-1.26-3.33-1.26-4.6 0L10.42 9 15 13.59l3.8-3.8c1.26-1.26 1.26-3.32 0-4.58" clipRule="evenodd" />
    </IconBase>
  ))
);

PillBold.displayName = 'PillBold';

// Triple export pattern
export { PillBold, PillBold as PillBoldIcon, PillBold as SiPillBold };
export default PillBold;
export type { PillBoldProps };
