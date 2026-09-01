import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillBoldProps = Omit<IconBaseProps, 'children'>;

const PillBold = memo(
  forwardRef<SVGSVGElement, PillBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.8 3.8a5.24 5.24 0 0 1 7.4 7.4l-9 9a5.24 5.24 0 0 1-7.4-7.4zM5.2 14.2a3.24 3.24 0 0 0 4.6 4.6l3.79-3.8L9 10.41zm13.6-9a3.24 3.24 0 0 0-4.6 0L10.42 9 15 13.59l3.8-3.8a3.24 3.24 0 0 0 0-4.58" clipRule="evenodd" />
    </IconBase>
  ))
);

PillBold.displayName = 'PillBold';

// Triple export pattern (lucide-react style)
export { PillBold, PillBold as PillBoldIcon, PillBold as SiPillBold };
export default PillBold;
export type { PillBoldProps };
