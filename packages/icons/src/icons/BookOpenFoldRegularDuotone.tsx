import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.8 5.78c3.31-.94 5.75-.48 7.38.27q.66.3 1.13.64l-.03.21-.03.62v1.07q-.09-.1-.27-.26c-.3-.27-.78-.62-1.43-.92-1.22-.56-3.11-.98-5.8-.33v10.16c2.84-.61 4.96-.17 6.43.5q.61.3 1.07.6V20q0 .31.21.52l-.06-.07-.01-.01-.07-.09q-.1-.12-.34-.32c-.3-.27-.78-.62-1.43-.92-1.3-.6-3.36-1.04-6.34-.19q-.36.1-.66-.12-.3-.23-.3-.6V6.5c0-.33.22-.62.54-.72M17.75 5.25q1.54 0 3.46.53c.32.1.54.39.54.72v11.7q0 .38-.3.6t-.66.12c-2.98-.85-5.04-.41-6.34.19-.65.3-1.13.65-1.43.92q-.24.2-.34.32l-.07.09-.01.01-.06.07q.2-.2.21-.52v-.58q.01-.48.14-1.17.41-.26.93-.5c1.47-.68 3.6-1.12 6.43-.5V7.07q-1.4-.32-2.5-.33z" opacity={0.4} />
        <path fillRule="evenodd" d="M17 2.25q.31 0 .53.22.21.22.22.53v11.03c0 .41-.34.75-.75.75-1.9 0-2.89.81-3.46 1.75-.6.99-.76 2.18-.79 2.9V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.52q0-.24.03-.62c.05-.5.19-1.18.52-1.87.34-.7.88-1.4 1.75-1.93.86-.53 1.99-.85 3.45-.85m-.75 1.54q-1.25.14-1.92.59c-.58.35-.95.82-1.18 1.3-.24.5-.34 1-.38 1.38q-.03.29-.02.45v7.55c.77-.9 1.9-1.58 3.5-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldRegularDuotone.displayName = 'BookOpenFoldRegularDuotone';

// Triple export pattern
export { BookOpenFoldRegularDuotone, BookOpenFoldRegularDuotone as BookOpenFoldRegularDuotoneIcon, BookOpenFoldRegularDuotone as SiBookOpenFoldRegularDuotone };
export default BookOpenFoldRegularDuotone;
export type { BookOpenFoldRegularDuotoneProps };
