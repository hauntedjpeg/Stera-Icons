import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FileCabinetBoldProps = Omit<IconBaseProps, 'children'>;

const FileCabinetBold = memo(
  forwardRef<SVGSVGElement, FileCabinetBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 14.5c.55 0 1 .45 1 1s-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1zM13.5 5.5c.55 0 1 .45 1 1s-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM6 16.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13H6zM9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C6 6.36 6 6.94 6 7.8V11h12V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C15.64 4 15.06 4 14.2 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

FileCabinetBold.displayName = 'FileCabinetBold';

// Triple export pattern
export { FileCabinetBold, FileCabinetBold as FileCabinetBoldIcon, FileCabinetBold as SiFileCabinetBold };
export default FileCabinetBold;
export type { FileCabinetBoldProps };
