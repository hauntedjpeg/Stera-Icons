import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseRegularDuotone = memo(
  forwardRef<SVGSVGElement, CollapseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.25 15.75v1.06l-3.72 3.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72zM20.53 19.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3.72-3.72v-1.06h1.06zM19.47 3.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72h-1.06V7.19zM3.47 3.47c.3-.3.77-.3 1.06 0l3.72 3.72v1.06H7.19L3.47 4.53c-.3-.3-.3-.77 0-1.06" opacity={0.4} />
        <path d="M9 14.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM19 14.25c.41 0 .75.34.75.75s-.34.75-.75.75h-3.25V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75zM9 4.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V5c0-.41.34-.75.75-.75M15 4.25c.41 0 .75.34.75.75v3.25H19c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CollapseRegularDuotone.displayName = 'CollapseRegularDuotone';

// Triple export pattern
export { CollapseRegularDuotone, CollapseRegularDuotone as CollapseRegularDuotoneIcon, CollapseRegularDuotone as SiCollapseRegularDuotone };
export default CollapseRegularDuotone;
export type { CollapseRegularDuotoneProps };
