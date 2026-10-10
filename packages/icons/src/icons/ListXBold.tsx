import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListXBoldProps = Omit<IconBaseProps, 'children'>;

const ListXBold = memo(
  forwardRef<SVGSVGElement, ListXBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 9c3.04 0 5.5 2.46 5.5 5.5S20.54 20 17.5 20 12 17.54 12 14.5 14.46 9 17.5 9m2.4 3.1c-.35-.36-.92-.36-1.27 0l-1.13 1.13-1.13-1.13c-.35-.36-.92-.36-1.27 0-.36.35-.36.92 0 1.27l1.13 1.13-1.13 1.13c-.36.35-.36.92 0 1.27.35.36.92.36 1.27 0l1.13-1.13 1.13 1.13c.35.36.92.36 1.27 0 .36-.35.36-.92 0-1.27l-1.13-1.13 1.13-1.13c.36-.35.36-.92 0-1.27" clipRule="evenodd" />
        <path d="M9 15c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM9 10c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 5c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListXBold.displayName = 'ListXBold';

// Triple export pattern
export { ListXBold, ListXBold as ListXBoldIcon, ListXBold as SiListXBold };
export default ListXBold;
export type { ListXBoldProps };
