import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShareRegularProps = Omit<IconBaseProps, 'children'>;

const ShareRegular = memo(
  forwardRef<SVGSVGElement, ShareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 8.75c1.33 0 2.2-.01 2.9.24 1.22.43 2.18 1.39 2.61 2.6.25.72.24 1.58.24 2.91v.9q.01 1.44-.05 2.36-.06.93-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.93.06-2.36.05H9.6q-1.44.01-2.36-.05-.93-.05-1.67-.41c-.8-.41-1.45-1.06-1.86-1.86-.25-.5-.36-1.04-.41-1.67q-.06-.92-.05-2.36v-.9c0-1.33-.01-2.2.24-2.9.43-1.22 1.39-2.18 2.6-2.61.72-.25 1.58-.24 2.91-.24.41 0 .75.34.75.75s-.34.75-.75.75c-1.46 0-2 .01-2.4.15-.8.28-1.42.9-1.7 1.7-.14.4-.15.94-.15 2.4v.9c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h4.8c1 0 1.7 0 2.24-.04.53-.05.86-.13 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24v-.9c0-1.46-.01-2-.15-2.4-.28-.8-.9-1.42-1.7-1.7-.4-.14-.94-.15-2.4-.15-.41 0-.75-.34-.75-.75s.34-.75.75-.75" />
        <path d="M12 1.75q.31 0 .53.22l3.5 3.5c.3.3.3.77 0 1.06s-.77.3-1.06 0l-2.22-2.22V15c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.31L9.03 6.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.5-3.5q.22-.22.53-.22" />
    </IconBase>
  ))
);

ShareRegular.displayName = 'ShareRegular';

// Triple export pattern
export { ShareRegular, ShareRegular as ShareRegularIcon, ShareRegular as SiShareRegular };
export default ShareRegular;
export type { ShareRegularProps };
