import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilRulerRegularProps = Omit<IconBaseProps, 'children'>;

const PencilRulerRegular = memo(
  forwardRef<SVGSVGElement, PencilRulerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7 1.25q.34.01.57.26l3 3.5q.18.21.18.49v15.25c0 1.1-.9 2-2 2h-3.5c-1.1 0-2-.9-2-2V5.5q0-.27.18-.49l3-3.5q.22-.25.57-.26m-2.25 18v1.5c0 .28.22.5.5.5h3.5c.28 0 .5-.22.5-.5v-1.5zm0-1.5h4.5v-10h-4.5zm0-11.97v.47h4.5v-.47L7 3.15zM18.75 2.25c1.1 0 2 .9 2 2v16.5c0 1.1-.9 2-2 2h-3.5c-1.1 0-2-.9-2-2V4.25c0-1.1.9-2 2-2zm-3.5 1.5c-.28 0-.5.22-.5.5V7H17c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25v3.25H17c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25v3.25H17c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25v2.75c0 .28.22.5.5.5h3.5c.28 0 .5-.22.5-.5V4.25c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilRulerRegular.displayName = 'PencilRulerRegular';

// Triple export pattern
export { PencilRulerRegular, PencilRulerRegular as PencilRulerRegularIcon, PencilRulerRegular as SiPencilRulerRegular };
export default PencilRulerRegular;
export type { PencilRulerRegularProps };
