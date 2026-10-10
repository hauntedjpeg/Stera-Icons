import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PipetteRegularDuotone = memo(
  forwardRef<SVGSVGElement, PipetteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.7 10.74-5.48 5.48c-.88.89-1.19 2.2-.8 3.37 1.17.38 2.47.08 3.36-.81l5.48-5.48 1.06 1.06-5.48 5.48c-1.4 1.4-3.5 1.8-5.3 1.02l-.28-.12-.12-.27c-.78-1.81-.37-3.92 1.02-5.31l5.48-5.48z" opacity={.4} />
        <path fillRule="evenodd" d="M15.6 3.72c1.3-1.3 3.39-1.3 4.68 0 1.3 1.3 1.3 3.39 0 4.68l-2 2 .2.2c1.08 1.09 1.08 2.86 0 3.95-1.1 1.1-2.87 1.1-3.96 0L9.45 9.48c-1.1-1.09-1.1-2.86 0-3.95s2.86-1.1 3.96 0l.19.2zm3.62 1.06c-.7-.7-1.85-.7-2.56 0L14.13 7.3q-.22.21-.53.22-.32 0-.53-.22l-.72-.72c-.51-.5-1.33-.5-1.84 0-.5.5-.5 1.33 0 1.83l5.07 5.07c.5.5 1.33.5 1.83 0s.5-1.33 0-1.83l-.72-.73c-.3-.3-.3-.77 0-1.06l2.53-2.53c.7-.7.7-1.85 0-2.56" clipRule="evenodd" />
    </IconBase>
  ))
);

PipetteRegularDuotone.displayName = 'PipetteRegularDuotone';

// Triple export pattern
export { PipetteRegularDuotone, PipetteRegularDuotone as PipetteRegularDuotoneIcon, PipetteRegularDuotone as SiPipetteRegularDuotone };
export default PipetteRegularDuotone;
export type { PipetteRegularDuotoneProps };
