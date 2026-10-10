import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashRegularProps = Omit<IconBaseProps, 'children'>;

const FlashRegular = memo(
  forwardRef<SVGSVGElement, FlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.88 1.44c.25-.23.62-.25.9-.07.29.19.41.54.3.86l-2.4 7.48 4.56 1.58q.4.15.5.57c.05.26-.05.53-.25.7l-11.37 10c-.25.23-.62.25-.9.07-.29-.19-.41-.54-.31-.86l2.4-7.48-4.56-1.58c-.25-.09-.44-.3-.49-.57s.04-.53.24-.7zM6.46 11.7l4.03 1.4c.39.13.6.55.47.94l-1.8 5.6 8.38-7.36-4.04-1.4c-.38-.13-.59-.55-.46-.94l1.79-5.6z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashRegular.displayName = 'FlashRegular';

// Triple export pattern
export { FlashRegular, FlashRegular as FlashRegularIcon, FlashRegular as SiFlashRegular };
export default FlashRegular;
export type { FlashRegularProps };
