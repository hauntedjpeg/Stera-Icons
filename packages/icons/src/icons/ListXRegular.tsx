import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListXRegularProps = Omit<IconBaseProps, 'children'>;

const ListXRegular = memo(
  forwardRef<SVGSVGElement, ListXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 9.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25-5.25-2.35-5.25-5.25 2.35-5.25 5.25-5.25m2.3 2.95c-.3-.3-.77-.3-1.06 0l-1.24 1.24-1.24-1.24c-.29-.3-.77-.3-1.06 0s-.3.77 0 1.06l1.24 1.24-1.24 1.24c-.3.29-.3.76 0 1.06s.77.3 1.06 0l1.24-1.24 1.24 1.24c.29.3.77.3 1.06 0s.3-.77 0-1.06l-1.24-1.24 1.24-1.24c.3-.29.3-.77 0-1.06" clipRule="evenodd" />
        <path d="M9 15.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM9 10.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListXRegular.displayName = 'ListXRegular';

// Triple export pattern
export { ListXRegular, ListXRegular as ListXRegularIcon, ListXRegular as SiListXRegular };
export default ListXRegular;
export type { ListXRegularProps };
