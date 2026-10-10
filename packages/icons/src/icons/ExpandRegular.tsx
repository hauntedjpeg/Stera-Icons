import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandRegularProps = Omit<IconBaseProps, 'children'>;

const ExpandRegular = memo(
  forwardRef<SVGSVGElement, ExpandRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 14.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72H8c.41 0 .75.34.75.75s-.34.75-.75.75H4l-.13-.01h-.02l-.04-.02q-.05 0-.1-.03l-.08-.04q-.09-.04-.16-.12t-.12-.16l-.04-.08-.05-.16-.01-.13v-4c0-.41.34-.75.75-.75s.75.34.75.75v2.19zM14.47 14.47c.3-.3.77-.3 1.06 0l3.72 3.72V16c0-.41.34-.75.75-.75s.75.34.75.75v4l-.01.13-.05.16-.04.08q-.04.09-.12.16t-.16.12l-.08.04-.1.03-.04.01h-.02l-.05.02H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.19l-3.72-3.72c-.3-.3-.3-.77 0-1.06M8 3.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.81l3.72 3.72c.3.3.3.77 0 1.06s-.77.3-1.06 0L4.75 5.81V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4l.01-.13.04-.15V3.7l.05-.08q.04-.09.12-.16t.16-.12l.08-.04.1-.03.04-.02h.02L4 3.25zM20 3.25l.13.01h.02l.04.02.1.03q.04.01.08.04.09.04.16.12t.12.16l.04.08.05.16.01.13v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.81l-3.72 3.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExpandRegular.displayName = 'ExpandRegular';

// Triple export pattern
export { ExpandRegular, ExpandRegular as ExpandRegularIcon, ExpandRegular as SiExpandRegular };
export default ExpandRegular;
export type { ExpandRegularProps };
