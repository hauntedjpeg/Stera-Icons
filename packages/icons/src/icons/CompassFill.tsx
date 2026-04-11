import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassFillProps = Omit<IconBaseProps, 'children'>;

const CompassFill = memo(
  forwardRef<SVGSVGElement, CompassFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.62 5.25a.9.9 0 0 0-.9-.21l-6 2a1 1 0 0 0-.51.46l-.04.1-2 6a.88.88 0 0 0 1.1 1.1l6-2q.41-.15.56-.55l2-6a.9.9 0 0 0-.21-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassFill.displayName = 'CompassFill';

// Triple export pattern (lucide-react style)
export { CompassFill, CompassFill as CompassFillIcon, CompassFill as SiCompassFill };
export default CompassFill;
export type { CompassFillProps };
