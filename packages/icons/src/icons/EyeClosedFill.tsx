import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedFillProps = Omit<IconBaseProps, 'children'>;

const EyeClosedFill = memo(
  forwardRef<SVGSVGElement, EyeClosedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-closed-fill" {...props}>
      <path d="M19.85 8.42a1.25 1.25 0 0 1 2.21 1.16 10 10 0 0 1-1.25 1.86l1.54 1.42a1.25 1.25 0 0 1-1.7 1.83l-1.66-1.53a11 11 0 0 1-2.87 1.55l.56 1.94a1.25 1.25 0 0 1-2.4.7l-.59-2.02a12 12 0 0 1-3.38 0l-.59 2.02a1.25 1.25 0 1 1-2.4-.7l.56-1.94a11 11 0 0 1-2.87-1.55l-1.66 1.53a1.25 1.25 0 0 1-1.7-1.83l1.54-1.42q-.73-.86-1.25-1.86a1.25 1.25 0 0 1 2.21-1.16 8.6 8.6 0 0 0 5.56 4.25l.06.01h.01a9.5 9.5 0 0 0 4.44 0l.06-.01a8.6 8.6 0 0 0 5.57-4.25" />
    </IconBase>
  ))
);

EyeClosedFill.displayName = 'EyeClosedFill';

// Triple export pattern (lucide-react style)
export { EyeClosedFill, EyeClosedFill as EyeClosedFillIcon, EyeClosedFill as SiEyeClosedFill };
export default EyeClosedFill;
export type { EyeClosedFillProps };
