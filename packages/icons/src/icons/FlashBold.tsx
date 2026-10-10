import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashBoldProps = Omit<IconBaseProps, 'children'>;

const FlashBold = memo(
  forwardRef<SVGSVGElement, FlashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.71 1.25c.34-.3.84-.33 1.21-.09.38.25.54.72.4 1.15L15 9.56l4.33 1.5c.33.11.58.4.65.75s-.05.7-.32.94l-11.37 10c-.34.3-.84.33-1.21.09-.38-.25-.54-.72-.4-1.15L9 14.44l-4.33-1.5c-.33-.11-.58-.4-.65-.75s.05-.7.32-.94zM6.95 11.62l3.63 1.25c.51.18.79.74.62 1.25l-1.52 4.74 7.37-6.48-3.63-1.25c-.51-.18-.79-.74-.62-1.25l1.52-4.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashBold.displayName = 'FlashBold';

// Triple export pattern
export { FlashBold, FlashBold as FlashBoldIcon, FlashBold as SiFlashBold };
export default FlashBold;
export type { FlashBoldProps };
