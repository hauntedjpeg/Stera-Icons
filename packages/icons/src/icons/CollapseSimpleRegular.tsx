import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleRegular = memo(
  forwardRef<SVGSVGElement, CollapseSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.19l-4.72 4.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.72-4.72H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM20.47 2.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.72 4.72H20c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v3.19z" />
    </IconBase>
  ))
);

CollapseSimpleRegular.displayName = 'CollapseSimpleRegular';

// Triple export pattern
export { CollapseSimpleRegular, CollapseSimpleRegular as CollapseSimpleRegularIcon, CollapseSimpleRegular as SiCollapseSimpleRegular };
export default CollapseSimpleRegular;
export type { CollapseSimpleRegularProps };
