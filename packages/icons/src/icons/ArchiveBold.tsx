import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchiveBoldProps = Omit<IconBaseProps, 'children'>;

const ArchiveBold = memo(
  forwardRef<SVGSVGElement, ArchiveBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 12c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M18.6 3q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T22 6.4v.2q0 .61-.02 1.07t-.25.96q-.27.53-.73.87v5.7q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 16.43 3 15.2V9.5q-.46-.34-.73-.87-.22-.49-.25-.96T2 6.6v-.2q0-.61.02-1.07t.25-.96q.37-.73 1.1-1.1.49-.22.96-.25T5.4 3zM5 15.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V10H5zM5.4 5c-.44 0-.7 0-.9.02q-.14 0-.19.02l-.03.01q-.15.08-.23.22v.04q-.02.06-.03.19C4 5.7 4 5.96 4 6.4v.2c0 .44 0 .7.02.9q0 .14.02.19l.01.03q.08.15.22.23h.04q.06.02.19.03c.2.02.46.02.9.02h13.2c.44 0 .7 0 .9-.02q.14 0 .19-.02l.03-.01q.15-.08.23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-.2c0-.44 0-.7-.02-.9q0-.14-.02-.19l-.01-.03q-.08-.15-.22-.23h-.04q-.06-.02-.19-.03C19.3 5 19.04 5 18.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchiveBold.displayName = 'ArchiveBold';

// Triple export pattern
export { ArchiveBold, ArchiveBold as ArchiveBoldIcon, ArchiveBold as SiArchiveBold };
export default ArchiveBold;
export type { ArchiveBoldProps };
