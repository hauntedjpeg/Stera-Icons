import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandBoldProps = Omit<IconBaseProps, 'children'>;

const ExpandBold = memo(
  forwardRef<SVGSVGElement, ExpandBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 14.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L6.42 19H8c.55 0 1 .45 1 1s-.45 1-1 1H4q-.08 0-.17-.02h-.06l-.06-.02-.14-.06-.12-.06q-.21-.15-.33-.37l-.02-.04-.06-.14-.03-.12L3 20v-4c0-.55.45-1 1-1s1 .45 1 1v1.59zM14.3 14.3c.38-.4 1.02-.4 1.4 0l3.3 3.29V16c0-.55.45-1 1-1s1 .45 1 1v4q0 .09-.02.16l-.02.13-.06.14-.02.04q-.13.22-.33.37l-.12.06-.14.06-.06.01-.03.01h-.04l-.06.02H16c-.55 0-1-.45-1-1s.45-1 1-1h1.59l-3.3-3.3c-.39-.38-.39-1.02 0-1.4M8 3c.55 0 1 .45 1 1s-.45 1-1 1H6.41l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L5 6.42V8c0 .55-.45 1-1 1s-1-.45-1-1V4q0-.12.03-.23l.01-.06.06-.14.07-.12q.13-.21.35-.33l.05-.02.14-.06.06-.01.03-.01.1-.02H8M20 3l.16.01h.03l.01.01h.03l.06.02.14.06.04.02q.22.13.37.33l.06.12.06.14.01.06q.03.1.03.23v4c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L17.58 5H16c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ExpandBold.displayName = 'ExpandBold';

// Triple export pattern
export { ExpandBold, ExpandBold as ExpandBoldIcon, ExpandBold as SiExpandBold };
export default ExpandBold;
export type { ExpandBoldProps };
