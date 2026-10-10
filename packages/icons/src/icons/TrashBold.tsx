import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashBoldProps = Omit<IconBaseProps, 'children'>;

const TrashBold = memo(
  forwardRef<SVGSVGElement, TrashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.43 10c.55-.04 1.03.38 1.07.93l.38 5.5c.03.55-.38 1.03-.93 1.07s-1.03-.38-1.07-.93l-.38-5.5c-.04-.55.38-1.03.93-1.07M14.57 10c.55.04.96.52.93 1.07l-.38 5.5c-.04.55-.52.97-1.07.93s-.97-.52-.93-1.07l.38-5.5c.04-.55.52-.97 1.07-.93" />
        <path fillRule="evenodd" d="M13.26 2c1.31 0 2.44.9 2.74 2.18l.3 1.32H21c.55 0 1 .45 1 1s-.45 1-1 1h-.57l-.52 7.6q-.1 1.55-.23 2.55c-.1.68-.26 1.28-.57 1.83-.5.88-1.26 1.58-2.17 2.02-.57.28-1.17.4-1.86.45q-1.01.06-2.55.05h-1.06q-1.54.01-2.55-.05c-.69-.06-1.3-.17-1.86-.45-.91-.44-1.67-1.14-2.17-2.02-.31-.55-.47-1.15-.57-1.83q-.14-1-.23-2.54L3.57 7.5H3c-.55 0-1-.45-1-1s.45-1 1-1h4.7L8 4.18C8.3 2.9 9.44 2 10.75 2zM6.1 14.97c.07 1.07.12 1.8.2 2.38.1.57.2.9.34 1.14q.46.8 1.3 1.21c.25.12.58.2 1.15.25.58.05 1.33.05 2.4.05h1.05c1.06 0 1.8 0 2.39-.05.57-.04.9-.13 1.15-.25q.84-.41 1.3-1.21c.14-.25.25-.57.33-1.14s.14-1.31.21-2.38l.52-7.47H5.57zM10.74 4c-.38 0-.7.26-.78.62l-.2.88h4.49l-.2-.88c-.09-.36-.41-.62-.79-.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashBold.displayName = 'TrashBold';

// Triple export pattern
export { TrashBold, TrashBold as TrashBoldIcon, TrashBold as SiTrashBold };
export default TrashBold;
export type { TrashBoldProps };
