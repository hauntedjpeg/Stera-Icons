import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, PencilLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m2.22 21.62.07.09q.35.31.81.28l5-.5q.35-.04.6-.28L9.92 20H21c.55 0 1 .45 1 1s-.45 1-1 1H3q-.5-.02-.78-.38M2 21.12q.03.16.1.3-.07-.14-.1-.3" opacity={0.4} />
        <path fillRule="evenodd" d="M16.4 1.68c.89-.88 2.31-.88 3.2 0l2.72 2.73c.88.88.88 2.3 0 3.18L8.71 21.21q-.26.25-.61.28l-5 .5c-.3.03-.6-.07-.8-.28q-.33-.34-.3-.81l.5-5 .04-.17q.06-.25.25-.44zM4.47 16.45l-.34 3.43 3.42-.34L17.1 10l-3.1-3.09zM18.18 3.1c-.1-.1-.26-.1-.36 0l-2.4 2.41 3.08 3.09 2.4-2.41c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineBoldDuotone.displayName = 'PencilLineBoldDuotone';

// Triple export pattern
export { PencilLineBoldDuotone, PencilLineBoldDuotone as PencilLineBoldDuotoneIcon, PencilLineBoldDuotone as SiPencilLineBoldDuotone };
export default PencilLineBoldDuotone;
export type { PencilLineBoldDuotoneProps };
