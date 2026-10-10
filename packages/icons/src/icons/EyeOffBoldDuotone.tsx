import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, EyeOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 7.8c.37-.4 1-.43 1.41-.06s.43 1 .06 1.41Q3.82 10.4 3.09 12C4.7 15.58 8.1 18 12 18q1.14 0 2.22-.27c.54-.13 1.08.2 1.21.73.13.54-.2 1.08-.73 1.21Q13.4 20 12 20c-4.92 0-9.1-3.17-10.93-7.62q-.15-.38 0-.76.9-2.16 2.43-3.82M12 4c4.92 0 9.1 3.17 10.93 7.62q.15.38 0 .76-.9 2.16-2.43 3.82c-.37.4-1 .43-1.41.06s-.43-1-.06-1.41q1.15-1.26 1.88-2.85C19.29 8.42 15.89 6 12 6q-1.14 0-2.22.27c-.54.13-1.08-.2-1.21-.73-.13-.54.2-1.08.73-1.21Q10.6 4 12 4" opacity={0.4} />
        <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l16 16c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-16-16c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

EyeOffBoldDuotone.displayName = 'EyeOffBoldDuotone';

// Triple export pattern
export { EyeOffBoldDuotone, EyeOffBoldDuotone as EyeOffBoldDuotoneIcon, EyeOffBoldDuotone as SiEyeOffBoldDuotone };
export default EyeOffBoldDuotone;
export type { EyeOffBoldDuotoneProps };
