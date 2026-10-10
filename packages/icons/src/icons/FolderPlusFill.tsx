import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderPlusFillProps = Omit<IconBaseProps, 'children'>;

const FolderPlusFill = memo(
  forwardRef<SVGSVGElement, FolderPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 13c.55 0 1 .45 1 1v2h2c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.56.45-1 1-1h2v-2c0-.55.44-1 1-1" />
        <path fillRule="evenodd" d="M9.17 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l.13.13c.38.37.46.44.54.5q.13.08.28.11c.1.02.2.03.74.03h3.47q.81 0 1.4.03c.39.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4v5.36q-.24-.07-.5-.07h-1V14c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1c-1.1 0-2 .89-2 2s.9 2 2 2h1v1q0 .26.06.5H8.3q-.92 0-1.62-.02l-.43-.02c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57q-.05-.82-.04-2.05v-7q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-2.47 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23V10h15v-.3c0-.58 0-.95-.02-1.23-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09-.28-.02-.65-.02-1.23-.02h-3.47c-.45 0-.83 0-1.2-.08q-.46-.12-.87-.36c-.33-.2-.6-.48-.9-.8l-.13-.12c-.38-.37-.46-.45-.54-.5q-.12-.08-.28-.11c-.1-.02-.2-.03-.74-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderPlusFill.displayName = 'FolderPlusFill';

// Triple export pattern
export { FolderPlusFill, FolderPlusFill as FolderPlusFillIcon, FolderPlusFill as SiFolderPlusFill };
export default FolderPlusFill;
export type { FolderPlusFillProps };
