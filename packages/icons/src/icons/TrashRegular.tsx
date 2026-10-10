import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashRegularProps = Omit<IconBaseProps, 'children'>;

const TrashRegular = memo(
  forwardRef<SVGSVGElement, TrashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.45 10.25c.41-.03.77.29.8.7l.38 5.5c.03.41-.29.77-.7.8s-.77-.29-.8-.7l-.38-5.5c-.03-.41.29-.77.7-.8M14.55 10.25c.41.03.73.39.7.8l-.38 5.5c-.03.41-.39.73-.8.7s-.73-.39-.7-.8l.38-5.5c.03-.41.39-.73.8-.7" />
        <path fillRule="evenodd" d="M13.26 2.25c1.2 0 2.23.82 2.5 1.98l.34 1.52H21c.41 0 .75.34.75.75s-.34.75-.75.75h-.8l-.54 7.84q-.1 1.55-.23 2.52c-.1.67-.25 1.24-.54 1.75-.48.83-1.2 1.5-2.05 1.92-.54.25-1.1.36-1.78.42q-1 .06-2.53.05h-1.06q-1.54.01-2.53-.05c-.67-.06-1.24-.17-1.77-.42-.87-.42-1.58-1.1-2.06-1.92-.3-.51-.44-1.08-.54-1.75q-.14-.97-.23-2.52L3.8 7.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.9l.35-1.52c.26-1.16 1.3-1.98 2.49-1.98zM5.84 14.99c.07 1.06.12 1.81.21 2.4s.2.94.36 1.22q.51.87 1.4 1.32c.3.14.67.23 1.25.27.6.05 1.35.05 2.41.05h1.06c1.06 0 1.81 0 2.4-.05.6-.04.96-.13 1.25-.27q.91-.45 1.4-1.32c.17-.28.28-.64.37-1.22.09-.59.14-1.34.21-2.4l.54-7.74H5.3zm4.9-11.24c-.5 0-.92.34-1.03.82l-.27 1.18h5.12l-.27-1.18c-.11-.48-.54-.82-1.03-.82z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashRegular.displayName = 'TrashRegular';

// Triple export pattern
export { TrashRegular, TrashRegular as TrashRegularIcon, TrashRegular as SiTrashRegular };
export default TrashRegular;
export type { TrashRegularProps };
