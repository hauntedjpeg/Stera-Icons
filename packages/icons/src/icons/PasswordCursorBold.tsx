import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PasswordCursorBoldProps = Omit<IconBaseProps, 'children'>;

const PasswordCursorBold = memo(
  forwardRef<SVGSVGElement, PasswordCursorBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.5 5c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1M9 7.5c.55 0 1 .45 1 1v1.75l1.5-.87c.47-.28 1.08-.12 1.36.36s.12 1.1-.36 1.37l-1.52.88 1.52.9c.48.27.64.88.36 1.36s-.89.64-1.36.36l-1.5-.88v1.77c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-1.76l-1.5.87c-.47.28-1.08.12-1.36-.36s-.12-1.09.36-1.37L7.02 12l-1.52-.88c-.48-.28-.64-.9-.36-1.37s.9-.64 1.37-.36l1.49.87V8.5c0-.55.44-1 1-1M18.5 7.5c.55 0 1 .45 1 1v1.75l1.5-.87c.47-.28 1.08-.12 1.36.36s.12 1.1-.36 1.37l-1.52.88 1.52.9c.48.27.64.88.36 1.36s-.89.64-1.36.36l-1.5-.88v1.77c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-1.76l-1.5.87c-.47.28-1.08.12-1.36-.36s-.12-1.09.36-1.37l1.52-.89-1.52-.88c-.48-.28-.64-.9-.36-1.37s.9-.64 1.37-.36l1.49.87V8.5c0-.55.44-1 1-1" />
    </IconBase>
  ))
);

PasswordCursorBold.displayName = 'PasswordCursorBold';

// Triple export pattern
export { PasswordCursorBold, PasswordCursorBold as PasswordCursorBoldIcon, PasswordCursorBold as SiPasswordCursorBold };
export default PasswordCursorBold;
export type { PasswordCursorBoldProps };
