import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillRegularProps = Omit<IconBaseProps, 'children'>;

const PillRegular = memo(
  forwardRef<SVGSVGElement, PillRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.97 3.97a5 5 0 0 1 7.06 7.06l-9 9a5 5 0 0 1-7.06-7.06zM5.03 14.03a3.5 3.5 0 0 0 4.94 4.94L13.94 15 9 10.06zm13.94-9a3.5 3.5 0 0 0-4.94 0L10.06 9 15 13.94l3.97-3.97a3.5 3.5 0 0 0 0-4.94" clipRule="evenodd" />
    </IconBase>
  ))
);

PillRegular.displayName = 'PillRegular';

// Triple export pattern (lucide-react style)
export { PillRegular, PillRegular as PillRegularIcon, PillRegular as SiPillRegular };
export default PillRegular;
export type { PillRegularProps };
