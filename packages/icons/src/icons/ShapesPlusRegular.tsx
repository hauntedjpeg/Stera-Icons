import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesPlusRegularProps = Omit<IconBaseProps, 'children'>;

const ShapesPlusRegular = memo(
  forwardRef<SVGSVGElement, ShapesPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.6 13.25q.6 0 1.05.02t.87.23q.65.33.99.98.2.43.22.87t.02 1.05v1.7q0 .6-.02 1.05t-.22.87q-.35.65-.99.98-.43.2-.87.23t-1.05.02H5.9q-.6 0-1.05-.02A2.25 2.25 0 0 1 3 20.03a2 2 0 0 1-.22-.88q-.02-.44-.02-1.05v-1.7q0-.6.02-1.05t.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02zm-1.7 1.5q-.62 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.02.29-.02.92v1.7q0 .63.02.92.02.28.06.32.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h1.7c.43 0 .71 0 .92-.02q.28-.02.32-.06a1 1 0 0 0 .33-.33 1 1 0 0 0 .06-.32q.03-.29.02-.92v-1.7q0-.62-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.02-.92-.02z" clipRule="evenodd" />
        <path d="M17.25 13.25c.41 0 .75.34.75.75v2.5h2.5a.75.75 0 0 1 0 1.5H18v2.5a.75.75 0 0 1-1.5 0V18H14a.75.75 0 0 1 0-1.5h2.5V14c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M6.28 2.42a.75.75 0 0 1 1 .05l3.75 3.75c.3.3.3.77 0 1.06l-3.75 3.75c-.3.3-.77.3-1.06 0L2.47 7.28a.75.75 0 0 1 0-1.06l3.75-3.75zM4.06 6.75l2.69 2.69 2.69-2.69-2.69-2.69zM17.25 2.75a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesPlusRegular.displayName = 'ShapesPlusRegular';

// Triple export pattern (lucide-react style)
export { ShapesPlusRegular, ShapesPlusRegular as ShapesPlusRegularIcon, ShapesPlusRegular as SiShapesPlusRegular };
export default ShapesPlusRegular;
export type { ShapesPlusRegularProps };
