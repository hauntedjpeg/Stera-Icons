import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullRegularProps = Omit<IconBaseProps, 'children'>;

const FlaskFullRegular = memo(
  forwardRef<SVGSVGElement, FlaskFullRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.25v5.23q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37c-2.09 0-3.41-2.23-2.41-4.07l3.9-7.14q.38-.74.39-1.56V3.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zm-1 12.7q-.71.1-1.33.5c-.98.66-2.16.9-3.3.73q-.42-.07-.84-.22l-.27-.1-.49-.21-1.5 2.75c-.45.83.15 1.85 1.1 1.85h9.26c.95 0 1.55-1.02 1.1-1.85l-1.8-3.3-1.06-.15-.29-.02q-.3-.01-.57.02m-3.25-5.97q0 1.22-.58 2.27l-1.68 3.07.36.16.19.07q.18.06.38.1.28.07.58.08l.38-.01q.48-.05.94-.24.27-.11.52-.28l.24-.14.1-.06q.63-.35 1.33-.49l.08-.01.1-.02.1-.02.37-.03h.04q.42-.02.83.03l-1.2-2.2q-.58-1.07-.58-2.28V3.75h-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullRegular.displayName = 'FlaskFullRegular';

// Triple export pattern
export { FlaskFullRegular, FlaskFullRegular as FlaskFullRegularIcon, FlaskFullRegular as SiFlaskFullRegular };
export default FlaskFullRegular;
export type { FlaskFullRegularProps };
