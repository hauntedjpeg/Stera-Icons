import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MessageMessagesFillProps = Omit<IconBaseProps, 'children'>;

const MessageMessagesFill = memo(
  forwardRef<SVGSVGElement, MessageMessagesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 7.63q.68 0 1.15.02.49.02.95.2c.7.29 1.26.85 1.56 1.55q.17.45.2.95.02.47.02 1.15V21c0 .32-.18.61-.46.77-.27.15-.61.14-.88-.03l-3.8-2.36H10.5q-.62.02-1.06-.06c-1.14-.23-2.03-1.12-2.26-2.26-.06-.3-.05-.64-.05-1.06 0-.48.39-.87.87-.87s.88.39.88.87c0 .5 0 .63.02.72.09.45.43.8.88.88.09.02.21.02.72.02H18q.25 0 .46.14l2.66 1.66V11.5l-.01-1.04c-.02-.23-.05-.33-.07-.4q-.19-.41-.6-.6c-.07-.02-.17-.05-.4-.07L19 9.37c-.48 0-.87-.39-.87-.87s.39-.87.87-.87" />
        <path d="M12.8 2.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v3.6q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.55.05-1.38.04H6.25l-3.79 2.36c-.27.17-.6.18-.88.03-.28-.16-.46-.45-.46-.77V6.2q-.01-.82.04-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.56-.05 1.38-.04z" />
    </IconBase>
  ))
);

MessageMessagesFill.displayName = 'MessageMessagesFill';

// Triple export pattern
export { MessageMessagesFill, MessageMessagesFill as MessageMessagesFillIcon, MessageMessagesFill as SiMessageMessagesFill };
export default MessageMessagesFill;
export type { MessageMessagesFillProps };
