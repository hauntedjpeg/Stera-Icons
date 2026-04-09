import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesFillProps = Omit<IconBaseProps, 'children'>;

const TogglesFill = memo(
  forwardRef<SVGSVGElement, TogglesFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggles-fill" {...props}>
      <path fillRule="evenodd" d="M16 12.88a4.87 4.87 0 1 1 0 9.74H8a4.87 4.87 0 1 1 0-9.75zm0 2.87a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path d="M8 4.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fillRule="evenodd" d="M16 1.38a4.87 4.87 0 1 1 0 9.75H8a4.87 4.87 0 1 1 0-9.76zM8 3.13a3.12 3.12 0 1 0 0 6.25h8a3.12 3.12 0 1 0 0-6.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

TogglesFill.displayName = 'TogglesFill';

// Triple export pattern (lucide-react style)
export { TogglesFill, TogglesFill as TogglesFillIcon, TogglesFill as SiTogglesFill };
export default TogglesFill;
export type { TogglesFillProps };
