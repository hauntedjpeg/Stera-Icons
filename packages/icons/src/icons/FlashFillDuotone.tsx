import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashFillDuotone = memo(
  forwardRef<SVGSVGElement, FlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.04 9.95c-.13.4.08.8.46.94l4.04 1.4-8.37 7.35 1.8-5.6c.12-.38-.09-.8-.47-.93l-4.04-1.4 8.37-7.36z" opacity={.4} />
        <path fillRule="evenodd" d="M15.88 1.44c.25-.23.62-.25.9-.07.29.19.41.54.3.86l-2.4 7.48 4.56 1.58q.4.15.5.57c.05.26-.04.53-.25.7l-11.37 10c-.25.23-.62.25-.9.07-.29-.19-.41-.54-.3-.86l2.4-7.48-4.57-1.58q-.4-.15-.49-.57c-.05-.26.04-.53.24-.7zM6.46 11.7l4.03 1.4c.39.13.6.55.47.94l-1.8 5.6 8.38-7.36-4.04-1.4c-.38-.13-.59-.55-.46-.94l1.8-5.6z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashFillDuotone.displayName = 'FlashFillDuotone';

// Triple export pattern
export { FlashFillDuotone, FlashFillDuotone as FlashFillDuotoneIcon, FlashFillDuotone as SiFlashFillDuotone };
export default FlashFillDuotone;
export type { FlashFillDuotoneProps };
