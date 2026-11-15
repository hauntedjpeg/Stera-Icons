import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashFillProps = Omit<IconBaseProps, 'children'>;

const FlashFill = memo(
  forwardRef<SVGSVGElement, FlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.88 1.44c.25-.23.62-.25.9-.07.29.19.41.54.3.86l-2.4 7.48 4.56 1.58q.4.15.5.57c.05.26-.04.53-.25.7l-11.37 10c-.25.23-.62.25-.9.07-.29-.19-.41-.54-.3-.86l2.4-7.48-4.57-1.58q-.4-.15-.49-.57c-.05-.26.04-.53.24-.7z" />
    </IconBase>
  ))
);

FlashFill.displayName = 'FlashFill';

// Triple export pattern
export { FlashFill, FlashFill as FlashFillIcon, FlashFill as SiFlashFill };
export default FlashFill;
export type { FlashFillProps };
