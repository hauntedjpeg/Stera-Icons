import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyFillProps = Omit<IconBaseProps, 'children'>;

const OptionKeyFill = memo(
  forwardRef<SVGSVGElement, OptionKeyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="option-key-fill" {...props}>
      <path d="M9 3.75c.5 0 .95.3 1.15.76l5.67 13.24H21a1.25 1.25 0 1 1 0 2.5h-6c-.5 0-.95-.3-1.15-.76L8.18 6.25H3a1.25 1.25 0 1 1 0-2.5zM21 3.75a1.25 1.25 0 0 1 0 2.5h-6.5a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

OptionKeyFill.displayName = 'OptionKeyFill';

// Triple export pattern (lucide-react style)
export { OptionKeyFill, OptionKeyFill as OptionKeyFillIcon, OptionKeyFill as SiOptionKeyFill };
export default OptionKeyFill;
export type { OptionKeyFillProps };
