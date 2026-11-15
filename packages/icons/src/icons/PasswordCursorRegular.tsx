import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PasswordCursorRegularProps = Omit<IconBaseProps, 'children'>;

const PasswordCursorRegular = memo(
  forwardRef<SVGSVGElement, PasswordCursorRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.5 5.25c.41 0 .75.34.75.75v12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-.41.34-.75.75-.75M9 7.75c.4 0 .75.34.75.75v2.19l1.87-1.1c.35-.2.81-.08 1.02.28.21.35.1.81-.27 1.02L10.5 12l1.89 1.1c.36.22.48.68.27 1.03-.21.36-.67.48-1.03.27l-1.87-1.1v2.21c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75v-2.2l-1.87 1.1c-.36.2-.82.08-1.03-.28-.2-.35-.09-.81.27-1.02l1.9-1.1-1.9-1.1c-.35-.22-.47-.68-.26-1.03.2-.36.67-.48 1.02-.27l1.87 1.08V8.5c0-.41.33-.75.75-.75M18.5 7.75c.4 0 .75.34.75.75v2.19l1.87-1.1c.35-.2.81-.08 1.02.28.21.35.1.81-.27 1.02L20 12l1.89 1.1c.36.22.48.68.27 1.03-.21.36-.67.48-1.03.27l-1.87-1.1v2.21c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75v-2.2l-1.87 1.1c-.36.2-.82.08-1.03-.28-.2-.35-.09-.81.27-1.02l1.9-1.1-1.9-1.1c-.35-.22-.47-.68-.26-1.03.2-.36.67-.48 1.02-.27l1.87 1.08V8.5c0-.41.33-.75.75-.75" />
    </IconBase>
  ))
);

PasswordCursorRegular.displayName = 'PasswordCursorRegular';

// Triple export pattern
export { PasswordCursorRegular, PasswordCursorRegular as PasswordCursorRegularIcon, PasswordCursorRegular as SiPasswordCursorRegular };
export default PasswordCursorRegular;
export type { PasswordCursorRegularProps };
