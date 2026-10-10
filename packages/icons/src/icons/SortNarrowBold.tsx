import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortNarrowBoldProps = Omit<IconBaseProps, 'children'>;

const SortNarrowBold = memo(
  forwardRef<SVGSVGElement, SortNarrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 3c.55 0 1 .45 1 1v13.59l2.3-2.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-4 4-.07.06-.13.1H6.5l-.15.07h-.01l-.15.04h-.03L6 21q-.1 0-.17-.02H5.8l-.05-.01-.04-.01q-.18-.06-.31-.16l-.1-.1-4-4c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0L5 17.58V4c0-.55.45-1 1-1" />
        <path d="M22 11c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM19 7c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1zM16 3c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

SortNarrowBold.displayName = 'SortNarrowBold';

// Triple export pattern
export { SortNarrowBold, SortNarrowBold as SortNarrowBoldIcon, SortNarrowBold as SiSortNarrowBold };
export default SortNarrowBold;
export type { SortNarrowBoldProps };
