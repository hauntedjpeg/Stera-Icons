import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyRegularProps = Omit<IconBaseProps, 'children'>;

const OptionKeyRegular = memo(
  forwardRef<SVGSVGElement, OptionKeyRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 4.25c.3 0 .57.18.69.45l5.8 13.55H21c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.3 0-.57-.18-.69-.45L8.51 5.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 4.25c.41 0 .75.34.75.75s-.34.75-.75.75h-6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

OptionKeyRegular.displayName = 'OptionKeyRegular';

// Triple export pattern
export { OptionKeyRegular, OptionKeyRegular as OptionKeyRegularIcon, OptionKeyRegular as SiOptionKeyRegular };
export default OptionKeyRegular;
export type { OptionKeyRegularProps };
