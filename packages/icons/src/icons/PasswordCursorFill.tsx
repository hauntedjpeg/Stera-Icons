import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PasswordCursorFillProps = Omit<IconBaseProps, 'children'>;

const PasswordCursorFill = memo(
  forwardRef<SVGSVGElement, PasswordCursorFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.8 5.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v5.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H5.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V9.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM4 7.25c-.41 0-.75.34-.75.75v8c0 .41.34.75.75.75s.75-.34.75-.75V8c0-.41-.34-.75-.75-.75m5.75 1.5c-.42 0-.75.34-.75.75v1.2l-1.04-.6c-.36-.21-.81-.09-1.02.27s-.09.82.27 1.03l1.04.6-1.04.6c-.36.2-.48.66-.28 1.02.21.36.67.48 1.03.28L9 13.3v1.2c0 .41.33.75.75.75.4 0 .75-.34.75-.75v-1.21l1.04.6c.36.21.82.09 1.03-.27.2-.36.08-.82-.28-1.02l-1.04-.6 1.04-.6c.36-.21.48-.67.27-1.03s-.66-.48-1.02-.27l-1.04.6V9.5c0-.41-.34-.75-.75-.75m8 0c-.42 0-.75.34-.75.75v1.2l-1.04-.6c-.36-.21-.81-.09-1.02.27s-.09.82.27 1.03l1.04.6-1.04.6c-.36.2-.48.66-.28 1.02.21.36.67.48 1.03.28l1.04-.6v1.2c0 .41.33.75.75.75.4 0 .75-.34.75-.75v-1.21l1.04.6c.36.21.82.09 1.03-.27.2-.36.08-.82-.28-1.02l-1.04-.6 1.04-.6c.36-.21.48-.67.27-1.03s-.66-.48-1.02-.27l-1.04.6V9.5c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

PasswordCursorFill.displayName = 'PasswordCursorFill';

// Triple export pattern
export { PasswordCursorFill, PasswordCursorFill as PasswordCursorFillIcon, PasswordCursorFill as SiPasswordCursorFill };
export default PasswordCursorFill;
export type { PasswordCursorFillProps };
