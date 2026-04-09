import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastFillProps = Omit<IconBaseProps, 'children'>;

const ContrastFill = memo(
  forwardRef<SVGSVGElement, ContrastFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 18a8.13 8.13 0 0 0 0-16.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastFill.displayName = 'ContrastFill';

// Triple export pattern (lucide-react style)
export { ContrastFill, ContrastFill as ContrastFillIcon, ContrastFill as SiContrastFill };
export default ContrastFill;
export type { ContrastFillProps };
