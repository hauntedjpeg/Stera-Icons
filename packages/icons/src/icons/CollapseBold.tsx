import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseBoldProps = Omit<IconBaseProps, 'children'>;

const CollapseBold = memo(
  forwardRef<SVGSVGElement, CollapseBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14q.1 0 .17.02l.12.02.14.06.12.07q.18.11.29.28l.1.22.02.04.01.06q.03.1.03.23v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L6.58 16H5c-.55 0-1-.45-1-1s.45-1 1-1zM19 14c.55 0 1 .45 1 1s-.45 1-1 1h-1.59l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L16 17.42V19c0 .55-.45 1-1 1s-1-.45-1-1v-4q0-.12.03-.23l.01-.06.06-.14.07-.12q.13-.21.35-.33l.05-.02.14-.06.06-.01.03-.01.1-.02H19M3.3 3.3c.38-.4 1.02-.4 1.4 0L8 6.58V5c0-.55.45-1 1-1s1 .45 1 1v4l-.03.24-.01.05-.02.04q-.04.12-.1.22-.12.16-.29.28l-.14.08-.03.01-.05.02-.04.02h-.05l-.05.02h-.02L9.1 10H5c-.55 0-1-.45-1-1s.45-1 1-1h1.59l-3.3-3.3c-.39-.38-.39-1.02 0-1.4M19.3 3.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L17.42 8H19c.55 0 1 .45 1 1s-.45 1-1 1h-4.1l-.07-.02h-.03l-.04-.01-.05-.01-.04-.02-.05-.02-.03-.01-.14-.07q-.16-.12-.28-.29l-.07-.12-.06-.14-.01-.05L14 9V5c0-.55.45-1 1-1s1 .45 1 1v1.59z" />
    </IconBase>
  ))
);

CollapseBold.displayName = 'CollapseBold';

// Triple export pattern
export { CollapseBold, CollapseBold as CollapseBoldIcon, CollapseBold as SiCollapseBold };
export default CollapseBold;
export type { CollapseBoldProps };
