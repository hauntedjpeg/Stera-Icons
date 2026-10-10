import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const OptionKeyRegularDuotone = memo(
  forwardRef<SVGSVGElement, OptionKeyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 4.25c.41 0 .75.34.75.75s-.34.75-.75.75h-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M9 4.25c.3 0 .57.18.69.45l5.8 13.55H21c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.3 0-.57-.18-.69-.45L8.51 5.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

OptionKeyRegularDuotone.displayName = 'OptionKeyRegularDuotone';

// Triple export pattern
export { OptionKeyRegularDuotone, OptionKeyRegularDuotone as OptionKeyRegularDuotoneIcon, OptionKeyRegularDuotone as SiOptionKeyRegularDuotone };
export default OptionKeyRegularDuotone;
export type { OptionKeyRegularDuotoneProps };
