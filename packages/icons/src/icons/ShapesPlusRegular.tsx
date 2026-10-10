import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesPlusRegularProps = Omit<IconBaseProps, 'children'>;

const ShapesPlusRegular = memo(
  forwardRef<SVGSVGElement, ShapesPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.6 13.25q.6 0 1.05.02t.87.23q.65.33.98.98c.15.28.2.58.23.87q.02.44.02 1.05v1.7q0 .6-.02 1.05t-.23.87q-.33.65-.98.98-.43.2-.87.23t-1.05.02H5.9q-.6 0-1.05-.02c-.3-.03-.59-.08-.87-.23q-.65-.33-.98-.98-.2-.43-.23-.87t-.02-1.05v-1.7q0-.6.02-1.05c.03-.3.08-.59.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02zm-1.7 1.5c-.43 0-.71 0-.92.02-.2.01-.28.04-.32.06q-.22.11-.33.33c-.02.04-.05.11-.06.32q-.02.29-.02.92v1.7q0 .63.02.92.02.28.06.32.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h1.7q.63 0 .92-.02.28-.02.32-.06.22-.11.33-.33c.02-.04.05-.11.06-.32q.02-.29.02-.92v-1.7q0-.62-.02-.92-.02-.28-.06-.32-.11-.22-.33-.33c-.04-.02-.11-.05-.32-.06q-.29-.02-.92-.02z" clipRule="evenodd" />
        <path d="M17.25 13.25c.41 0 .75.34.75.75v2.5h2.5c.41 0 .75.34.75.75s-.34.75-.75.75H18v2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V18H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5V14c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M6.28 2.42c.3-.24.73-.22 1 .05l3.75 3.75c.3.3.3.77 0 1.06l-3.75 3.75c-.3.3-.77.3-1.06 0L2.47 7.28c-.3-.3-.3-.77 0-1.06l3.75-3.75zM4.06 6.75l2.69 2.69 2.69-2.69-2.69-2.69zM17.25 2.75c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesPlusRegular.displayName = 'ShapesPlusRegular';

// Triple export pattern
export { ShapesPlusRegular, ShapesPlusRegular as ShapesPlusRegularIcon, ShapesPlusRegular as SiShapesPlusRegular };
export default ShapesPlusRegular;
export type { ShapesPlusRegularProps };
