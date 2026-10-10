import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PlusCircleRegular = memo(
  forwardRef<SVGSVGElement, PlusCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.25c.42 0 .75.34.75.75v3.25H16c.41 0 .75.33.75.75 0 .4-.34.75-.75.75h-3.25V16c0 .41-.33.75-.75.75-.4 0-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusCircleRegular.displayName = 'PlusCircleRegular';

// Triple export pattern
export { PlusCircleRegular, PlusCircleRegular as PlusCircleRegularIcon, PlusCircleRegular as SiPlusCircleRegular };
export default PlusCircleRegular;
export type { PlusCircleRegularProps };
