import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleBoldProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleBold = memo(
  forwardRef<SVGSVGElement, ContrastCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5a4.5 4.5 0 1 1 0 9z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 5.5a4.5 4.5 0 0 0 0 9V20a8 8 0 1 0 0-16z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleBold.displayName = 'ContrastCircleBold';

// Triple export pattern (lucide-react style)
export { ContrastCircleBold, ContrastCircleBold as ContrastCircleBoldIcon, ContrastCircleBold as SiContrastCircleBold };
export default ContrastCircleBold;
export type { ContrastCircleBoldProps };
