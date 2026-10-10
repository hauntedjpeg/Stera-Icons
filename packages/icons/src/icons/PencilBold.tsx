import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilBoldProps = Omit<IconBaseProps, 'children'>;

const PencilBold = memo(
  forwardRef<SVGSVGElement, PencilBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.4 1.68c.89-.88 2.31-.88 3.2 0l2.72 2.73c.88.88.88 2.3 0 3.18L8.71 21.21q-.26.25-.61.28l-5 .5c-.3.03-.6-.07-.8-.28q-.33-.34-.3-.81l.5-5 .04-.17q.07-.25.25-.44zM4.47 16.45l-.34 3.43 3.42-.34L17.1 10l-3.1-3.09zM18.18 3.1c-.1-.1-.26-.1-.36 0l-2.4 2.4 3.08 3.1 2.4-2.41c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilBold.displayName = 'PencilBold';

// Triple export pattern
export { PencilBold, PencilBold as PencilBoldIcon, PencilBold as SiPencilBold };
export default PencilBold;
export type { PencilBoldProps };
