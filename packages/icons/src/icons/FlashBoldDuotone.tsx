import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.71 1.25c.42-.37 1.05-.32 1.42.09s.32 1.05-.1 1.41L6.96 11.62l3.63 1.25c.51.18.79.74.62 1.25l-2.62 8.19c-.17.52-.74.81-1.26.64-.53-.17-.82-.73-.65-1.26L9 14.44l-4.33-1.5c-.33-.11-.58-.4-.65-.75s.05-.7.32-.94z" />
        <path d="M17.33 2.3 15 9.57l4.33 1.5c.33.11.58.4.65.75s-.05.7-.32.94l-11.37 10h-.02q.22-.16.3-.44l1.11-3.45 7.37-6.48-3.63-1.25c-.51-.18-.79-.74-.62-1.25l1.52-4.74 2.72-2.39q.21-.2.3-.46z" opacity={.4} />
    </IconBase>
  ))
);

FlashBoldDuotone.displayName = 'FlashBoldDuotone';

// Triple export pattern
export { FlashBoldDuotone, FlashBoldDuotone as FlashBoldDuotoneIcon, FlashBoldDuotone as SiFlashBoldDuotone };
export default FlashBoldDuotone;
export type { FlashBoldDuotoneProps };
