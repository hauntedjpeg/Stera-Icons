import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookBoldDuotone = memo(
  forwardRef<SVGSVGElement, NotebookBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 2q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v10q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37-.34.66-.87 1.2-1.53 1.53-.43.22-.89.3-1.37.34q-.7.05-1.72.04H8.5v-2H16c.72 0 1.2 0 1.56-.03s.52-.08.62-.13q.43-.23.66-.66c.05-.1.1-.26.13-.62.03-.37.03-.84.03-1.56V7c0-.72 0-1.2-.03-1.56s-.08-.52-.13-.62q-.23-.43-.66-.66c-.1-.05-.26-.1-.62-.13C17.2 4 16.72 4 16 4H8.5V2z" opacity={.4} />
        <path fillRule="evenodd" d="M8.5 22h-1c-.85 0-1.52.01-2.08-.17-1.07-.35-1.9-1.18-2.25-2.25C3 19.02 3 18.35 3 17.5v-11c0-.85-.01-1.52.17-2.08.35-1.07 1.18-1.9 2.25-2.25C5.98 2 6.65 2 7.5 2h1zm-2-17.99c-.24.01-.36.03-.46.06-.46.15-.82.5-.97.97-.06.18-.07.45-.07 1.46v11c0 1 .01 1.28.07 1.46.15.46.51.82.97.97.1.03.22.05.46.06z" clipRule="evenodd" />
        <path d="M14 12c.55 0 1 .45 1 1s-.45 1-1 1h-2.5c-.55 0-1-.45-1-1s.45-1 1-1zM16 8c.55 0 1 .45 1 1s-.45 1-1 1h-4.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

NotebookBoldDuotone.displayName = 'NotebookBoldDuotone';

// Triple export pattern
export { NotebookBoldDuotone, NotebookBoldDuotone as NotebookBoldDuotoneIcon, NotebookBoldDuotone as SiNotebookBoldDuotone };
export default NotebookBoldDuotone;
export type { NotebookBoldDuotoneProps };
