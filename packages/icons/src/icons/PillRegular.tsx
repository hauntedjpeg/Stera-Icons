import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillRegularProps = Omit<IconBaseProps, 'children'>;

const PillRegular = memo(
  forwardRef<SVGSVGElement, PillRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.97 3.97c1.95-1.95 5.11-1.95 7.06 0s1.95 5.11 0 7.06l-9 9c-1.95 1.95-5.11 1.95-7.06 0s-1.95-5.11 0-7.06zM5.03 14.03c-1.36 1.36-1.36 3.58 0 4.94s3.58 1.36 4.94 0L13.94 15 9 10.06zm13.94-9c-1.36-1.36-3.58-1.36-4.94 0L10.06 9 15 13.94l3.97-3.97c1.36-1.36 1.36-3.58 0-4.94" clipRule="evenodd" />
    </IconBase>
  ))
);

PillRegular.displayName = 'PillRegular';

// Triple export pattern
export { PillRegular, PillRegular as PillRegularIcon, PillRegular as SiPillRegular };
export default PillRegular;
export type { PillRegularProps };
