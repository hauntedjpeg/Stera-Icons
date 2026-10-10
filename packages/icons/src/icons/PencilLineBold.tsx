import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineBoldProps = Omit<IconBaseProps, 'children'>;

const PencilLineBold = memo(
  forwardRef<SVGSVGElement, PencilLineBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.4 1.68c.89-.88 2.31-.88 3.2 0l2.72 2.73c.88.88.88 2.3 0 3.18L9.92 20H21c.55 0 1 .45 1 1s-.45 1-1 1H3q-.23 0-.43-.1h-.02q-.25-.13-.4-.36v-.02l-.04-.07-.02-.03q-.08-.18-.09-.39v-.13l.5-5 .04-.17q.06-.25.25-.44zM4.47 16.45l-.34 3.43 3.43-.34L17.09 10l-3.1-3.09zM18.18 3.1c-.1-.1-.26-.1-.36 0l-2.4 2.4 3.08 3.1 2.4-2.41c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineBold.displayName = 'PencilLineBold';

// Triple export pattern
export { PencilLineBold, PencilLineBold as PencilLineBoldIcon, PencilLineBold as SiPencilLineBold };
export default PencilLineBold;
export type { PencilLineBoldProps };
