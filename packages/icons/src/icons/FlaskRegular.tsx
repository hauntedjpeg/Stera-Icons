import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskRegularProps = Omit<IconBaseProps, 'children'>;

const FlaskRegular = memo(
  forwardRef<SVGSVGElement, FlaskRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.25v5.23q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37c-2.09 0-3.41-2.23-2.41-4.07l3.9-7.14q.38-.74.39-1.56V3.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zm-4.25 6.73q0 1.22-.58 2.27l-3.9 7.15c-.45.83.15 1.85 1.1 1.85h9.26c.95 0 1.55-1.02 1.1-1.85l-3.9-7.15q-.58-1.06-.58-2.27V3.75h-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskRegular.displayName = 'FlaskRegular';

// Triple export pattern
export { FlaskRegular, FlaskRegular as FlaskRegularIcon, FlaskRegular as SiFlaskRegular };
export default FlaskRegular;
export type { FlaskRegularProps };
