import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseRegularProps = Omit<IconBaseProps, 'children'>;

const CollapseRegular = memo(
  forwardRef<SVGSVGElement, CollapseRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m9 14.25.13.01h.02l.04.02.1.03.14.07.1.09q.07.07.12.16l.04.08.05.16.01.13v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.19l-3.72 3.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM19 14.25c.41 0 .75.34.75.75s-.34.75-.75.75h-2.19l3.72 3.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3.72-3.72V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4l.01-.13.04-.15v-.01l.05-.08q.04-.09.12-.16t.16-.12l.08-.04.1-.03.04-.02h.02l.13-.01zM3.47 3.47c.3-.3.77-.3 1.06 0l3.72 3.72V5c0-.41.34-.75.75-.75s.75.34.75.75v4l-.01.13-.05.16-.08.14-.08.1-.1.08-.14.08-.1.03-.04.01h-.02l-.05.02H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.19L3.47 4.53c-.3-.3-.3-.77 0-1.06M19.47 3.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72H19c.41 0 .75.34.75.75s-.34.75-.75.75h-4.08l-.05-.01h-.02l-.04-.02q-.05 0-.1-.03l-.08-.04q-.09-.04-.16-.12l-.09-.1-.07-.14-.05-.16-.01-.13V5c0-.41.34-.75.75-.75s.75.34.75.75v2.19z" />
    </IconBase>
  ))
);

CollapseRegular.displayName = 'CollapseRegular';

// Triple export pattern
export { CollapseRegular, CollapseRegular as CollapseRegularIcon, CollapseRegular as SiCollapseRegular };
export default CollapseRegular;
export type { CollapseRegularProps };
