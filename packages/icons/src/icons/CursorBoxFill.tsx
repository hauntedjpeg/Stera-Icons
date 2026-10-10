import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoxFillProps = Omit<IconBaseProps, 'children'>;

const CursorBoxFill = memo(
  forwardRef<SVGSVGElement, CursorBoxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.25 13.07c-.37-1.1.63-2.13 1.72-1.86l.1.04 7.82 2.6c1.34.45 1.3 2.36-.05 2.76l-3.27.96-.96 3.27c-.4 1.35-2.31 1.39-2.76.05z" />
        <path d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v.81c0 .49-.39.88-.87.88s-.87-.4-.87-.88V9.9c0-1.13 0-1.93-.06-2.56-.05-.6-.14-.98-.29-1.26q-.46-.9-1.36-1.36c-.28-.15-.65-.24-1.26-.3-.63-.04-1.43-.04-2.56-.04H9.9c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26-.04.63-.04 1.43-.04 2.56v4.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h.8c.49 0 .88.39.88.87s-.4.88-.87.88H9.9q-1.64.02-2.7-.06c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06z" />
    </IconBase>
  ))
);

CursorBoxFill.displayName = 'CursorBoxFill';

// Triple export pattern
export { CursorBoxFill, CursorBoxFill as CursorBoxFillIcon, CursorBoxFill as SiCursorBoxFill };
export default CursorBoxFill;
export type { CursorBoxFillProps };
