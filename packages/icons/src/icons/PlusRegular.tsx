import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusRegularProps = Omit<IconBaseProps, 'children'>;

const PlusRegular = memo(
  forwardRef<SVGSVGElement, PlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.25c.41 0 .75.34.75.75v7.25H20c.41 0 .75.34.75.75s-.34.75-.75.75h-7.25V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.25V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PlusRegular.displayName = 'PlusRegular';

// Triple export pattern
export { PlusRegular, PlusRegular as PlusRegularIcon, PlusRegular as SiPlusRegular };
export default PlusRegular;
export type { PlusRegularProps };
