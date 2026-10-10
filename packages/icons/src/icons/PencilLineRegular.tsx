import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineRegularProps = Omit<IconBaseProps, 'children'>;

const PencilLineRegular = memo(
  forwardRef<SVGSVGElement, PencilLineRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.59 1.85c.78-.78 2.04-.78 2.82 0l2.74 2.74c.78.78.78 2.04 0 2.82L9.3 20.25H21c.41 0 .75.34.75.75s-.34.75-.75.75H3q-.09 0-.16-.02-.06 0-.11-.03l-.04-.02-.1-.05-.03-.02-.1-.08-.07-.1-.02-.02-.05-.1-.02-.03-.03-.12-.01-.05v-.18l.5-5 .02-.13q.05-.2.19-.33zM4.22 16.34l-.38 3.82 3.82-.38L17.44 10 14 6.56zM18.35 2.91c-.2-.2-.5-.2-.7 0l-2.6 2.59 3.45 3.44 2.59-2.59c.2-.2.19-.5 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineRegular.displayName = 'PencilLineRegular';

// Triple export pattern
export { PencilLineRegular, PencilLineRegular as PencilLineRegularIcon, PencilLineRegular as SiPencilLineRegular };
export default PencilLineRegular;
export type { PencilLineRegularProps };
