import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyboardRegularProps = Omit<IconBaseProps, 'children'>;

const KeyboardRegular = memo(
  forwardRef<SVGSVGElement, KeyboardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 13.25c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM14.25 13.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 13.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM6.5 9.25c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM10.25 9.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM14.25 9.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 9.25c.42 0 .75.34.75.75s-.33.75-.75.75h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M20 5.25c1.52 0 2.75 1.23 2.75 2.75v8c0 1.52-1.23 2.75-2.75 2.75H4c-1.52 0-2.75-1.23-2.75-2.75V8c0-1.52 1.23-2.75 2.75-2.75zM4 6.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyboardRegular.displayName = 'KeyboardRegular';

// Triple export pattern
export { KeyboardRegular, KeyboardRegular as KeyboardRegularIcon, KeyboardRegular as SiKeyboardRegular };
export default KeyboardRegular;
export type { KeyboardRegularProps };
