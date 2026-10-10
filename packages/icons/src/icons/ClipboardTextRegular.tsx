import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardTextRegularProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextRegular = memo(
  forwardRef<SVGSVGElement, ClipboardTextRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 14c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75S8.59 14 9 14zM15 10.5c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M14.25 2.25c1.1 0 2 .9 2 2q.4 0 .72.04c.41.03.79.1 1.14.29.57.28 1.03.74 1.31 1.3.19.37.26.76.3 1.18q.04.61.03 1.54v8.8q0 .93-.03 1.54c-.04.42-.11.8-.3 1.17q-.44.87-1.3 1.31c-.37.19-.76.26-1.18.3q-.61.04-1.54.03H8.6q-.93 0-1.54-.03c-.42-.04-.8-.11-1.17-.3q-.87-.44-1.31-1.3c-.19-.37-.26-.76-.3-1.18q-.04-.61-.03-1.54V8.6q0-.93.03-1.54c.04-.42.11-.8.3-1.17.28-.57.74-1.03 1.3-1.31q.54-.25 1.15-.3l.72-.03c0-1.1.9-2 2-2zm-6.5 3.5q-.35 0-.6.03-.43.05-.58.13-.43.23-.66.66c-.06.12-.1.29-.13.61-.03.34-.03.78-.03 1.42v8.8c0 .64 0 1.08.03 1.42q.04.46.13.61.23.43.66.66c.12.06.29.1.61.13.34.03.78.03 1.42.03h6.8c.64 0 1.08 0 1.42-.03q.46-.04.61-.13.43-.23.66-.66c.06-.12.1-.29.13-.61.03-.34.03-.78.03-1.42V8.6c0-.64 0-1.08-.03-1.42q-.04-.46-.13-.61-.23-.43-.66-.66-.14-.08-.59-.13l-.6-.03c0 .67-.32 1.26-.82 1.62l-.12.08q-.3.18-.65.26-.2.04-.4.04h-4.5q-.2 0-.4-.04-.36-.08-.65-.26l-.12-.08q-.33-.23-.53-.57-.3-.46-.3-1.05m2-2c-.28 0-.5.22-.5.5v1.5c0 .28.22.5.5.5h4.5c.28 0 .5-.22.5-.5v-1.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardTextRegular.displayName = 'ClipboardTextRegular';

// Triple export pattern
export { ClipboardTextRegular, ClipboardTextRegular as ClipboardTextRegularIcon, ClipboardTextRegular as SiClipboardTextRegular };
export default ClipboardTextRegular;
export type { ClipboardTextRegularProps };
