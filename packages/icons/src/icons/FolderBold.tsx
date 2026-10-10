import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderBoldProps = Omit<IconBaseProps, 'children'>;

const FolderBold = memo(
  forwardRef<SVGSVGElement, FolderBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.17 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l.13.13c.38.37.46.44.54.5q.13.08.28.11c.1.02.2.03.74.03h3.47q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4v5q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.3q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57q-.05-.82-.04-2.05v-7q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-4.67 8v3.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h7.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.2zm2.2-6c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v1.8h15c0-.47 0-.78-.02-1.03-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09-.28-.02-.65-.02-1.23-.02h-3.47c-.45 0-.83 0-1.2-.08q-.46-.12-.87-.36c-.33-.2-.6-.48-.9-.8l-.13-.12c-.38-.37-.46-.45-.54-.5q-.13-.08-.28-.11c-.1-.02-.2-.03-.74-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderBold.displayName = 'FolderBold';

// Triple export pattern
export { FolderBold, FolderBold as FolderBoldIcon, FolderBold as SiFolderBold };
export default FolderBold;
export type { FolderBoldProps };
