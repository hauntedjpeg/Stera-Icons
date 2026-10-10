import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteRegularProps = Omit<IconBaseProps, 'children'>;

const PipetteRegular = memo(
  forwardRef<SVGSVGElement, PipetteRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.6 3.72c1.3-1.3 3.39-1.3 4.68 0 1.3 1.3 1.3 3.39 0 4.68l-2 2 .2.2c1.08 1.09 1.08 2.86 0 3.95-1.1 1.1-2.87 1.1-3.96 0l-.2-.2-5.48 5.49c-1.4 1.4-3.5 1.8-5.3 1.02l-.28-.12-.12-.27c-.78-1.81-.37-3.92 1.02-5.31l5.48-5.48-.19-.2c-1.1-1.09-1.1-2.86 0-3.95s2.86-1.1 3.96 0l.19.2zM5.22 16.22c-.88.89-1.19 2.2-.8 3.37 1.17.38 2.47.08 3.36-.81l5.48-5.48-2.56-2.56zm14-11.44c-.7-.7-1.85-.7-2.56 0L14.13 7.3q-.22.22-.53.22t-.53-.22l-.73-.72c-.5-.5-1.32-.5-1.83 0-.5.5-.5 1.33 0 1.83l4.87 4.88.2.19c.5.5 1.32.5 1.83 0 .5-.5.5-1.33 0-1.83l-.72-.73c-.3-.3-.3-.77 0-1.06l2.53-2.53c.7-.7.7-1.85 0-2.56" clipRule="evenodd" />
    </IconBase>
  ))
);

PipetteRegular.displayName = 'PipetteRegular';

// Triple export pattern
export { PipetteRegular, PipetteRegular as PipetteRegularIcon, PipetteRegular as SiPipetteRegular };
export default PipetteRegular;
export type { PipetteRegularProps };
