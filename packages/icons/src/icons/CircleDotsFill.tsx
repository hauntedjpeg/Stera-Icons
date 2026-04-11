import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotsFillProps = Omit<IconBaseProps, 'children'>;

const CircleDotsFill = memo(
  forwardRef<SVGSVGElement, CircleDotsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.25a1.75 1.75 0 0 1 0 3.5 1.75 1.75 0 1 1 0-3.5M4.4 17.12c.68-.68 1.79-.68 2.47 0v.01A1.75 1.75 0 1 1 4.4 19.6a1.75 1.75 0 0 1 0-2.48M17.13 17.12a1.75 1.75 0 1 1 2.47 2.49 1.75 1.75 0 1 1-2.47-2.49M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10M3 10.25A1.75 1.75 0 1 1 1.25 12v-.02c0-.96.78-1.75 1.75-1.74M21 10.25c.97 0 1.75.78 1.75 1.74v.02a1.75 1.75 0 1 1-3.5 0V12c0-.97.78-1.75 1.75-1.75M4.4 4.4a1.75 1.75 0 1 1 2.47 2.48A1.75 1.75 0 1 1 4.39 4.4zM17.12 4.4a1.75 1.75 0 0 1 2.49 0 1.75 1.75 0 1 1-2.48 2.48v-.01a1.75 1.75 0 0 1 0-2.47M12 1.25a1.75 1.75 0 0 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

CircleDotsFill.displayName = 'CircleDotsFill';

// Triple export pattern (lucide-react style)
export { CircleDotsFill, CircleDotsFill as CircleDotsFillIcon, CircleDotsFill as SiCircleDotsFill };
export default CircleDotsFill;
export type { CircleDotsFillProps };
